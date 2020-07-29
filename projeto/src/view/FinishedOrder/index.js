import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, Title, Description, Back, BackText} from './styles';

export default class FinishedOrder extends Component{
    render(){
        return(
            <Container>
                <Icon name="clipboard-check-outline" size={48} color="#fff"/>
                <Title>Entregue!</Title>
                <Description>Pedido adicionado à lista de pedidos concluídos!</Description>
                <Back onPress={() => {this.props.navigation.navigate("PendingOrders")}}>
                    <BackText>Voltar</BackText>
                </Back>
            </Container>
        );
    }
}