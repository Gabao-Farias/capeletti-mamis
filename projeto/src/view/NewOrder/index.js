import React, {Component} from 'react';
import { ScrollView,  Alert } from 'react-native';

import getRealm from '../../services/realm';
import getNewID from '../../services/IDProvider';

import {Container, Title, Inputs, InputText, Options, Add, Back, AddText, BackText} from './styles';

export default class NewOrder extends Component {
    state = {
        id: 0,
        clientName: '',
        type: '',
        flavor: '',
        size: '',
        value: '',
        date: '',
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
            const data = { //FIX IT
                id: order.id,
                clientName: order.clientName,
                type: order.type,
                flavor: order.flavor,
                size: order.size,
                value: Number(order.value),
                date: new Date,
            };

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

    async handleAddOrder(){
        try{
            this.saveOrder(this.state);

            this.setState({//FIX IT
                id: 0,
                clientName: '',
                type: '',
                flavor: '',
                size: '',
                value: '',
                date: '',
            });

            this.defineNewID();

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
                        <InputText
                            value={this.state.clientName}
                            onChangeText={text => this.setState({clientName: text})}
                            textAlign='center'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Nome do cliente'}
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
