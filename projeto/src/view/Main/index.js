import React, {Component} from 'react';

import { Container, Button, Text } from './styles';

export default class Main extends Component {

    render(){
        return(
            <Container>
                <Button onPress={() => {this.props.navigation.navigate('NewOrder')}}>
                    <Text>Novo Pedido</Text>
                </Button>
                <Button onPress={() => {this.props.navigation.navigate('NewSpent')}}>
                    <Text>Novo Gasto</Text>
                </Button>
                <Button onPress={() => {this.props.navigation.navigate('NewCostumer')}}>
                    <Text>Novo Cliente</Text>
                </Button>
                <Button onPress={() => {this.props.navigation.navigate('PendingOrders')}}>
                    <Text>Pedidos Pendentes</Text>
                </Button>
            </Container>
        );
    }
}
