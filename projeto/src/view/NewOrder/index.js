import React, {Component} from 'react';
import { ScrollView,  Alert } from 'react-native';

import getRealm from '../../services/realm';
import getNewID from '../../services/IDPovider';

import {Container, Title, Inputs, InputCostumerName, InputType, InputFlavor, InputSize, InputValue, Options, Add, Back, AddText, BackText} from './styles';

export default class NewOrder extends Component {
    state = {
        id: 0,
        clientName: '',
        type: '',
        flavor: '',
        size: '',
        value: '',
        date: new Date,
    }

    generateAlert(title, message){
        Alert.alert(title, message);
    }

    async defineNewID(){
        const realm = await getRealm();

        const objects = realm.objects('Order');

        this.setState({id: Number(getNewID(objects))});
    }

    async saveOrder(order){
        try{
            const data = {
                id: order.id,
                clientName: order.clientName,
                type: order.type,
                flavor: order.flavor,
                size: order.size,
                value: Number(order.value),
                date: order.date,
            };

            const realm = await getRealm();
            
            console.log(data);
            
            realm.write(() => {
                realm.create('Order', data);
            });

        }catch(err){
            console.log("Error on saving data");
        }
    }

    async handleAddOrder(){
        try{
            this.saveOrder(this.state);

            this.setState({
                id: 0,
                clientName: '',
                type: '',
                flavor: '',
                size: '',
                value: '',
                date: new Date,
            });

            this.defineNewID();

            this.generateAlert("Concluído", "Pedido realizado com sucesso");

        }catch(err){
            console.log("Error on saving data");
        }
    }

    componentDidMount(){
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
                        <InputCostumerName
                            value={this.state.clientName}
                            onChangeText={text => this.setState({clientName: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Nome do cliente'}
                        />
                        <InputType
                            value={this.state.type}
                            onChangeText={text => this.setState({type: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Tipo'}
                        />
                        <InputFlavor
                            value={this.state.flavor}
                            onChangeText={text => this.setState({flavor: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Sabor'}
                        />
                        <InputSize
                            value={this.state.size}
                            onChangeText={text => this.setState({size: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Tamanho'}
                        />
                        <InputValue
                            value={this.state.value}
                            onChangeText={text => this.setState({value: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Valor (R$)'}
                            keyboardType={'numeric'}
                        />
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
