import React, {Component} from 'react';
import { ScrollView,  Alert } from 'react-native';

import getRealm from '../../services/realm';
import getNewID from '../../services/IDProvider';
import getCostumerIDFromCostumerName from '../../services/ProvideIDFromCostumer';

import {Container, Title, Inputs, InputText, Options, Add, Back, AddText, BackText} from './styles';

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
        deliverDate: '',
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
    }

    defineCostumerID(){
        this.setState({id: getCostumerIDFromCostumerName(this.state.costumerName, this.state.others.costumers)});
    }

    async saveOrder(order){
        try{
            const data = {};

            const realm = await getRealm();
            
            console.log(data);
            
            realm.write(() => {
                realm.create('Order', data);
            });

            this.generateAlert("Concluído", "Pedido adicionado aos pendentes!");

        }catch(err){
            console.log("Error on saving data");
        }
    }

    handleAddOrder(){
        if(getCostumerIDFromCostumerName(this.state.costumerName, this.state.others.costumers) != null){
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
                deliverDate: '',
                delivered: false,
                deliveredDate: null
            });

            this.defineNewID();
        }else{
            console.log("O cliente ainda não foi cadastrado!");
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

    componentDidUpdate(){
        console.log(getCostumerIDFromCostumerName(this.state.costumerName, this.state.others.costumers));
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
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Quantidade (Unidades)'}
                        />
                        <InputText
                            value={this.state.deliverDate}
                            onChangeText={text => this.setState({flavor: text})}
                            textAlign='center'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            placeholder={'Data de entrega'}
                        />
                    </Inputs>
                    <Options>
                        <Back onPress={() => {this.props.navigation.goBack()}}>
                            <BackText>Voltar</BackText>
                        </Back>
                        <Add onPress={() => {/*this.handleAddOrder()*/}}>
                            <AddText>Adicionar</AddText>
                        </Add>
                    </Options>
                </ScrollView>
            </Container>
        );
    }
}
