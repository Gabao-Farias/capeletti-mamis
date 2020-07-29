import React, { Component } from 'react';

import getRealm from '../../services/realm';

import PendingOrder from '../../components/PendingOrder';

import { Container, Title, Description, List } from './styles';

export default class PendingOrders extends Component{
    state = {
        pendingOrders: []
    }

    async loadOrders(){
        try{
            const realm = await getRealm();

            const unfilteredOrders = realm.objects('Order');

            const filteredOrders = unfilteredOrders.filtered('delivered = false SORT(deliverDate ASC)');

            this.setState({pendingOrders: filteredOrders});

        }catch(err){
            console.log(err);
        }
    }

    componentDidMount(){
        this.loadOrders();
    }

    render(){
        return(
            <Container>
                <Title>Pedidos Pendentes</Title>
                <Description>{this.state.pendingOrders.length} pedidos</Description>
                <List
                    keyboardShouldPersistTaps="handled"
                    data={this.state.pendingOrders}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                        <PendingOrder order={item} navigation={this.props.navigation} />
                    )}
                />
            </Container>
        );
    }
}