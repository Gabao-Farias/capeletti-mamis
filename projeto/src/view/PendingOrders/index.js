import React, { Component } from 'react';

import getRealm from '../../services/realm';

import PendingOrder from '../../components/PendingOrder';

import { Container, List } from './styles';

export default class PendingOrders extends Component{
    state = {
        pendingOrders: []
    }

    componentDidMount(){
    }

    render(){
        return(
            <Container>
                <List
                    keyboardShouldPersistTaps="handled"
                    data={this.state.pendingOrders}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                        <PendingOrder data={this.state.pendingOrders} />
                    )}
                />
            </Container>
        );
    }
}