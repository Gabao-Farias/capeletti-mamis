import React, {Component} from 'react';
import { ScrollView,  Alert } from 'react-native';

import getRealm from '../../services/realm';
import getNewID from '../../services/IDProvider';
import getCostumerIDFromCostumerName from '../../services/ProvideIDFromCostumer';

import {Container, Title, Inputs, InputText, DateCard, Subtitle, InputsSmall, SmallInput, Options, Add, Back, AddText, BackText} from './styles';

export default class NewOrder extends Component {
    state = {
        id: 0,
        costumerID: 0,
        costumerName: '',
        type: '',
        flavor: '',
        size: '',
        ammount: '',
        value: 0,
        day: '',
        month: '',
        year: '',
        delivered: false,
        deliveredDate: null,
        others: {            
            costumers: [],
        }
    }

    generateAlert(title, message){
        Alert.alert(title, message);
    }

    async defineNewID(){
        const realm = await getRealm();

        const objects = realm.objects('Order');

        this.setState({id: Number(getNewID(objects))});
        console.log(this.state.id);
    }

    defineCostumerID(){
        this.setState({id: getCostumerIDFromCostumerName(this.state.costumerName, this.state.others.costumers)});
    }

    async saveOrder(order){
        try{
            const data = {
                id: order.id,
                costumerID: order.costumerID,
                costumerName: order.costumerName,
                type: order.type,
                flavor: order.flavor,
                size: order.size,
                ammount: Number(order.ammount),
                value: 0,
                deliverDate: new Date(order.year + '/' + order.month + '/' +  order.day),
                delivered: false,
                deliveredDate: new Date('01/01/2000')
            };

            const realm = await getRealm();            
            
            realm.write(() => {
                realm.create('Order', data);
            });

            this.generateAlert("Concluído", "Pedido adicionado aos pendentes!");

        }catch(err){
            console.log("Error on saving data");
            console.log(err);
        }
    }

    emptyFields(){
        if(
            this.state.costumerName === "" ||
            this.state.type === "" ||
            this.state.flavor === "" ||
            this.state.size === "" ||
            this.state.ammount === "" ||
            this.state.year === "" ||
            this.state.month === "" ||
            this.state.day === ""
        ){
            return(true);
        }else{
            return(false);
        }
    }

    handleAddOrder(){
        if(!this.emptyFields()){
            if(getCostumerIDFromCostumerName(this.state.costumerName, this.state.others.costumers) != null){
                this.setState({costumerID: getCostumerIDFromCostumerName(this.state.costumerName, this.state.others.costumers)})

                this.saveOrder(this.state);

                this.setState({
                    id: 0,
                    costumerID: 0,
                    costumerName: '',
                    type: '',
                    flavor: '',
                    size: '',
                    ammount: '',
                    value: 0,
                    day: '',
                    month: '',
                    year: '',
                    delivered: false,
                    deliveredDate: null
                });

                this.defineNewID();
            }else{
                this.generateAlert("Cuidado!", "O cliente mencionado ainda não foi cadastrado! Cadastre-o para efetuar o pedido.");
            }
        }else{
            this.generateAlert("Cuidado!", "Não deixe nenhum campo em branco!");
        }
    }

    async loadExistentCostumers(){
        try{
            const realm = await getRealm();

            const data = realm.objects('Costumer');

            this.setState({others: {costumers: data}});
        }catch(err){
            this.generateAlert("Erro", "Não foi possível estabelecer conexão com o banco de dados!");
        }
    }

    componentDidMount(){
        this.loadExistentCostumers();
        this.defineNewID();
    }

    render(){
        return(
            <Container>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                >
                    <Title>Novo Pedido</Title>
                    <Inputs>
                        <InputText
                            value={this.state.costumerName}
                            onChangeText={text => this.setState({costumerName: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Nome do cliente'}
                        />
                        <InputText
                            value={this.state.type}
                            onChangeText={text => this.setState({type: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Tipo'}
                        />
                        <InputText
                            value={this.state.flavor}
                            onChangeText={text => this.setState({flavor: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Sabor'}
                        />
                        <InputText
                            value={this.state.size}
                            onChangeText={text => this.setState({size: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Tamanho'}
                        />
                        <InputText
                            value={this.state.ammount}
                            onChangeText={text => this.setState({ammount: text})}
                            textAlign='center'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            placeholder={'Quantidade (Unidades)'}
                        />
                        <DateCard>
                            <Subtitle>Data de entrega</Subtitle>
                            <InputsSmall>
                                <SmallInput
                                    value={this.state.day}
                                    onChangeText={text => this.setState({day: text})}
                                    placeholder={'Dia'}
                                    keyboardType='number-pad'
                                    textAlign='center'
                                />
                                <SmallInput
                                    value={this.state.month}
                                    onChangeText={text => this.setState({month: text})}
                                    placeholder={'Mês'}
                                    keyboardType='number-pad'
                                    textAlign='center'
                                />
                                <SmallInput
                                    value={this.state.year}
                                    onChangeText={text => this.setState({year: text})}
                                    placeholder={'Ano'}
                                    keyboardType='number-pad'
                                    textAlign='center'
                                />
                            </InputsSmall>
                        </DateCard>
                    </Inputs>
                    <Options>
                        <Back onPress={() => {this.props.navigation.goBack()}}>
                            <BackText>Voltar</BackText>
                        </Back>
                        <Add onPress={() => {this.handleAddOrder()}}>
                            <AddText>Adicionar</AddText>
                        </Add>
                    </Options>
                </ScrollView>
            </Container>
        );
    }
}
