import React, { Component } from 'react';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {
    Container,
    Title,
    Progress,
    IconSpace,
    SizesContainer,
    Size,
    SizeText,
    SizeSelected,
    Options,
    Next,
    NextText,
    Back,
    BackText
} from './styles';

import { Alert } from 'react-native';

export default class SelectSize extends Component{

    state = {
        costumerSelected: this.props.route.params.costumerSelected,
        typeSelected: this.props.route.params.typeSelected,
        flavorSelected: this.props.route.params.flavorSelected,
        sizeSelected: "",
    };

    handleAvancar(){
        if(this.state.sizeSelected != ""){
            this.props.navigation.navigate("InsertAmmount", this.state);
        }else{
            Alert.alert("Não selecionou?", "Selecione um tamahno antes!");
        }
    }

    render(){
        return(
            <Container>
                <Title>Selecione o tamanho</Title>

                <Progress>
                    <IconSpace>
                        <AntIcon name="user" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="pasta" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="food-steak" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="weight" size={30} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="stack-overflow" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="calendar" size={20} color="#aaa" />
                    </IconSpace>
                </Progress>

                <SizesContainer>
                    <Size onPress={() => {this.setState({sizeSelected: "Pequeno"})}}>
                        <SizeText>Pequeno</SizeText>
                    </Size>
                    <Size onPress={() => {this.setState({sizeSelected: "Grande"})}}>
                        <SizeText>Grande</SizeText>
                    </Size>
                </SizesContainer>

                <SizeSelected>Tamanho selecionado: {this.state.sizeSelected}</SizeSelected>

                <Options>
                    <Back onPress={() => {this.props.navigation.goBack()}}>
                        <BackText>Voltar</BackText>
                    </Back>
                    <Next onPress={() => {this.handleAvancar()}}>
                        <NextText>Avançar</NextText>
                    </Next>
                </Options>

            </Container>
        );
    }
}