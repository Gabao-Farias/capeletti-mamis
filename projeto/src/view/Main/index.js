import React, {Component} from 'react';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import { Container, NewOrder, NewSpent, OrderText, SpentText } from './styles';

export default class Main extends Component {

    render(){
        return(
            <Container>
                <NewOrder onPress={() => {this.props.navigation.navigate('NewRegister')}}>
                    <OrderText>Novo Pedido</OrderText>
                </NewOrder>
                <NewSpent>
                    <SpentText>Novo Gasto</SpentText>
                </NewSpent>
            </Container>
        );
    }
}
