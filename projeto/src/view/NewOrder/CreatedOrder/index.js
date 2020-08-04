import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, Title, Description, Back, BackText} from './styles';

export default class CreatedOrder extends Component{
    render(){
        return(
            <Container>
                <Icon name="clipboard-plus-outline" size={48} color="#fff"/>
                <Title>Criado!</Title>
                <Description>Pedido adicionado à lista de pedidos pendentes!</Description>
                <Back onPress={() => {this.props.navigation.navigate("Main")}}>
                    <BackText>Voltar ao menu</BackText>
                </Back>
            </Container>
        );
    }
}