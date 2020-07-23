import React, {Component} from 'react';

import { Container, NewOrder, NewSpent, OrderText, SpentText } from './styles';

export default class Main extends Component {

    render(){
        return(
            <Container>
                <NewOrder onPress={() => {this.props.navigation.navigate('NewOrder')}}>
                    <OrderText>Novo Pedido</OrderText>
                </NewOrder>
                <NewSpent onPress={() => {this.props.navigation.navigate('NewSpent')}}>
                    <SpentText>Novo Gasto</SpentText>
                </NewSpent>
            </Container>
        );
    }
}
