import React, {Component} from 'react';

import {
    Container,
    Title,
    FlavorsContainer,
    Flavor,
    FlavorText,
    FlavorSelected,
    Options,
    Next,
    NextText,
    Back,
    BackText
} from './styles';

import { Alert } from 'react-native';

export default class SelectFlavor extends Component{

    state = {
        costumerSelected: this.props.route.params.costumerSelected,
        typeSelected: this.props.route.params.typeSelected,
        flavorSelected: "",
    };

    handleAvancar(){
        if(this.state.flavorSelected != ""){
            this.props.navigation.navigate("SelectSize", this.state);
        }else{
            Alert.alert("Não selecionou?", "Selecione o sabor antes!");
        }
    }

    render(){
        return(
            <Container>
                <Title>Selecione o sabor</Title>

                <FlavorsContainer>
                    <Flavor onPress={() => {this.setState({flavorSelected: "Bolonhesa"})}} >
                        <FlavorText>Bolonhesa</FlavorText>
                    </Flavor>
                    <Flavor onPress={() => {this.setState({flavorSelected: "Frango"})}} >
                        <FlavorText>Frango</FlavorText>
                    </Flavor>
                    <Flavor onPress={() => {this.setState({flavorSelected: "Moranga Cabotiá"})}} >
                        <FlavorText>Moranga Cabotiá</FlavorText>
                    </Flavor>
                </FlavorsContainer>

                <FlavorSelected>Sabor selecionado: {this.state.flavorSelected}</FlavorSelected>

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