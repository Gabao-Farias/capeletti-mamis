import React, {Component} from 'react';

import {
    Container,
    Title,
    AmmountInput,
    Options,
    Next,
    NextText,
    Back,
    BackText
} from './styles';

import { Alert } from 'react-native';

export default class InsertAmmount extends Component{

    state = {
        costumerSelected: this.props.route.params.costumerSelected,
        typeSelected: this.props.route.params.typeSelected,
        flavorSelected: this.props.route.params.flavorSelected,
        sizeSelected: this.props.route.params.sizeSelected,
        ammount: "",
    };

    handleAvancar(){
        if(this.state.ammount != ""){
            const validation = Number(this.state.ammount);

            if(String(validation) === "NaN"){
                Alert.alert("Número inválido!");
            }else{
                this.props.navigation.navigate('SelectDate', this.state);
            }
        }else{
            Alert.alert("Não inseriu?", "Insira a quantidade antes!");
        }
    }

    render(){
        return(
            <Container>
                <Title>Insira a quantidade</Title>

                <AmmountInput
                    value={this.state.ammount}
                    onChangeText={text => this.setState({ammount: text})}
                    placeholder={'(Un)'}
                    keyboardType='number-pad'
                    textAlign='center'
                />

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