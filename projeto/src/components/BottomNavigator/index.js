import React from 'react';

import AntIcon from 'react-native-vector-icons/AntDesign';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Container, NavCard, Description } from './styles';

export default function BottomNavigator({navigation}){
    return(
        <Container>
            <NavCard onPress={() => {navigation.navigate('Main')}} >
                <AntIcon name="home" size={26} color="#fff" />
                <Description>Home</Description>
            </NavCard>
            <NavCard onPress={() => {navigation.navigate('NewOrder')}} >
                <FoundationIcon name="clipboard-pencil" size={26} color="#fff" />
                <Description>Novo Pedido</Description>
            </NavCard>
            <NavCard onPress={() => {navigation.navigate('NewCostumer')}} >
                <AntIcon name="adduser" size={26} color="#fff" />
                <Description>Novo Cliente</Description>
            </NavCard>
            <NavCard onPress={() => {navigation.navigate('NewSpend')}} >
                <MaterialIcon name="attach-money" size={26} color="#fff" />
                <Description>Novo Gasto</Description>
            </NavCard>
            <NavCard onPress={() => {navigation.navigate('PendingOrders')}} >
                <FoundationIcon name="clipboard-notes" size={26} color="#fff" />
                <Description>Pedidos Pendentes</Description>
            </NavCard>
        </Container>
    );
}