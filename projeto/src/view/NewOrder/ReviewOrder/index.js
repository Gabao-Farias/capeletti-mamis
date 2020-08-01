import React, {Component} from 'react';

import {format} from 'date-fns';
import PT_BR from 'date-fns/locale/pt-BR';

import getRealm from '../../../services/realm';
import getNewID from '../../../services/IDProvider';

import {
    Container,
    Title,
    Subtitle,
    OrderContainer,
    Name,
    DescriptionCard,
    DeliverDate,
    SmallDescription,
    LilDesc,
    Options,
    Next,
    NextText,
    Back,
    BackText
} from './styles';
import { Alert } from 'react-native';

export default class ReviewOrder extends Component{

    state = {
        id: 0,
        costumerID: 0,
        costumerName: this.props.route.params.costumerSelected,
        type: this.props.route.params.typeSelected,
        flavor: this.props.route.params.flavorSelected,
        size: this.props.route.params.sizeSelected,
        ammount: this.props.route.params.ammount,
        value: 0,
        deliverDate: new Date(this.props.route.params.dateSelected),
        delivered: false,
        deliveredDate: new Date("01/01/2000"),
    };

    async defineNewID(){
        try{
            const realm = await getRealm();

            const objects = realm.objects('Order');

            this.setState({id: Number(getNewID(objects))});
            console.log("(defineNewID) -> ID da Order:" + this.state.id);
        }catch(err){
            Alert.alert("Erro", "Problema ao gerar ID do pedido");
            console.log(err);
        }
    }

    async defineCostumerID(){
        try{
            const realm = await getRealm();

            const objects = realm.objects('Costumer').filtered(`name = '${this.state.costumerName}'`);

            let a = Array.from(objects);    //Remember that realm returns Proxy objects!

            console.log(a[0].costumerID);

            this.setState({costumerID: a[0].costumerID});
        }catch(err){
            Alert.alert("Erro", "Problema ao buscar ID do cliente");
            console.log(err);
        }
    }

    async saveOrder(order){
        try{
            const realm = await getRealm();            
            
            realm.write(() => {
                realm.create('Order', order);
            });

            Alert.alert("Concluído!", "Pedido adicionado aos pendentes!");
        }catch(err){
            this.generateAlert("Erro!", "Consultar desenvolvedor!");
            console.log("Error on saving data");
            console.log(err);
        }
    }

    handleAddOrder(){
        this.saveOrder(this.state);

        this.props.navigation.navigate('Main');
    }

    componentDidMount(){
        this.defineNewID();
        this.defineCostumerID();
    }
    
    render(){
        return(
            <Container>
                <Title>Revisão do pedido</Title>
                <Subtitle>Está tudo certo com o pedido?</Subtitle>
                <OrderContainer>
                    <Name>{this.state.costumerName}</Name>
                    <DescriptionCard>
                        <DeliverDate>{format(
                            this.state.deliverDate,
                            "'Dia' dd 'de' MMMM",
                            {locale: PT_BR}
                        )}
                        </DeliverDate>
                        <SmallDescription>
                            <LilDesc>{this.state.type}</LilDesc>
                            <LilDesc>{this.state.flavor}</LilDesc>
                            <LilDesc>{this.state.size}</LilDesc>
                            <LilDesc>{this.state.ammount}</LilDesc>
                        </SmallDescription>
                    </DescriptionCard>
                </OrderContainer>

                <Options>
                    <Back onPress={() => {this.props.navigation.goBack()}}>
                        <BackText>Voltar</BackText>
                    </Back>
                    <Next onPress={() => {this.handleAddOrder()}}>
                        <NextText>Concluir</NextText>
                    </Next>
                </Options>
            </Container>
        );
    }
}