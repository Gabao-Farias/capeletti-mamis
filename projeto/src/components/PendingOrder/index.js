import React from 'react';

import { Container, CostumerName, Information, Type, Flavor, Size, Ammount, DeliverDate, ConfirmDeliver, ConfirmDeliverText} from './styles';

export default function PendingOrder({data}){
    return(
        <Container>
            <CostumerName>{data.costumerName}</CostumerName>
            <Information>
                <Type>Tipo: {data.type}</Type>
                <Flavor>Sabor: {data.flavor}</Flavor>
                <Size>Tamanho: {data.size}</Size>
                <Ammount>Quantidade: {data.ammount}</Ammount>
                <DeliverDate>Data de entrega: {
                    new Intl.DateTimeFormat('pt-br', { day: 'numeric' }).format(data.deliverDate) + "/" +
                    new Intl.DateTimeFormat('pt-br', { month: 'numeric' }).format(data.deliverDate) + "/" +
                    new Intl.DateTimeFormat('pt-br', { year: 'numeric' }).format(data.deliverDate)                    
                }</DeliverDate>
            </Information>
            <ConfirmDeliver>
                <ConfirmDeliverText>Confirmar entrega</ConfirmDeliverText>
            </ConfirmDeliver>
        </Container>
    );
}