import React from 'react';
import { Text } from 'react-native';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container } from './styles';

export default function PendingOrder({order}){


    return(
        <Container>
            <Text>{order.costumerName}</Text>
            <Text>{order.type}</Text>
            <Text>{order.flavor}</Text>
            <Text>{order.size}</Text>
            <Text>{format(order.deliverDate, pt.options("'Dia' dd 'de' MMMM"))}</Text>
        </Container>
    );
}