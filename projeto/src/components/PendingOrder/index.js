import React, {useState} from 'react';

import {format} from 'date-fns';

import { Container, Name, DescriptionCard, Date, SmallDescription, LilDesc, Price, ConfirmDeliver, DeliverText } from './styles';

export default function PendingOrder({order}){
    const [price, setPrice] = useState('');
    const [newOrder, setNewOrder] = useState('');

    return(
        <Container>
            <Name>{order.costumerName}</Name>
            <DescriptionCard>
                <Date>{format(order.deliverDate, "'Dia' dd 'de' MMMM")}</Date>
                <SmallDescription>
                    <LilDesc>{order.type}</LilDesc>
                    <LilDesc>{order.flavor}</LilDesc>
                    <LilDesc>{order.size}</LilDesc>
                    <LilDesc>{order.ammount}</LilDesc>
                </SmallDescription>
            </DescriptionCard>
            <Price
                value={price}
                onChangeText={setPrice}
                placeholder={'Preço (R$)'}
                keyboardType='number-pad'
                textAlign='center'
            />
            <ConfirmDeliver onPress={() => {}}>
                <DeliverText>Confirmar Entrega</DeliverText>
            </ConfirmDeliver>
        </Container>
    );
}