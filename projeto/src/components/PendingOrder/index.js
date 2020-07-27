import React, {useState} from 'react';
import { Alert } from 'react-native';
import getRealm from '../../services/realm';

import {format} from 'date-fns';

import { Container, Name, DescriptionCard, DeliverDate, SmallDescription, LilDesc, Price, ConfirmDeliver, DeliverText } from './styles';

export default function PendingOrder({order}){
    const [price, setPrice] = useState('');

    async function handleConfirmDeliver(){

        if(String(price) != ""){
            try{
                const realm = await getRealm();
                
                console.log(new Date);

                realm.write(() => {
                    realm.create('Order', {id: order.id, value: Number(price), delivered: true, deliveredDate: new Date}, 'modified');
                });

                Alert.alert("Entregue!", "Pedido entregue.");
            }catch(err){
                Alert.alert('Erro','Erro ao confirmar entrega!');
                console.log(err);
            }
        }else{
            Alert.alert("Aviso", "Insira o valor final do produto antes de confirmar a entrega!");
        }        
    }

    return(
        <Container>
            <Name>{order.costumerName}</Name>
            <DescriptionCard>
                <DeliverDate>{format(order.deliverDate, "'Dia' dd 'de' MMMM")}</DeliverDate>
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
            <ConfirmDeliver onPress={() => {handleConfirmDeliver()}}>
                <DeliverText>Confirmar Entrega</DeliverText>
            </ConfirmDeliver>
        </Container>
    );
}