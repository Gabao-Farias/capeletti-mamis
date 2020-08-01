import React, { Component } from 'react';

import getRealm from '../../../services/realm';

import {
    Container,
    Title,
    TypesContainer,
    Type,
    TypeText,
    TypeSelected,
    Options,
    Next,
    NextText,
    Back,
    BackText
} from './styles';

import { Alert } from 'react-native';

export default class SelectType extends Component{

    state = {
        costumerSelected: this.props.route.params,
        typeSelected: "",
    };

    handleAvancar(){
        if(this.state.typeSelected != ""){
            this.props.navigation.navigate("SelectFlavor", this.state);
        }else{
            Alert.alert("Não selecionou?", "Selecione um tipo antes!");
        }
    }

    render(){
        return(
            <Container>
                <Title>Selecione o tipo</Title>

                <TypesContainer>
                    <Type onPress={() => {this.setState({typeSelected: "Capeletti"})}}>
                        <TypeText>Capeletti</TypeText>
                    </Type>
                    <Type onPress={() => {this.setState({typeSelected: "Lasanha"})}}>
                        <TypeText>Lasanha</TypeText>
                    </Type>
                    <Type onPress={() => {this.setState({typeSelected: "Torta Quente"})}}>
                        <TypeText>Torta Quente</TypeText>
                    </Type>
                    <Type onPress={() => {this.setState({typeSelected: "Tortei"})}}>
                        <TypeText>Tortei</TypeText>
                    </Type>
                </TypesContainer>

                <TypeSelected>Tipo selecionado: {this.state.typeSelected}</TypeSelected>

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
