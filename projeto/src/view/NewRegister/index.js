import React, {Component} from 'react';
import { Keyboard, ScrollView } from 'react-native';

import {Container, Title, Inputs, InputClientName, InputType, InputFlavor, InputSize, InputValue, Options, Add, Back, AddText, BackText} from './styles';



export default class NewRegister extends Component {

    render(){
        return(
                <Container>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                    >
                        <Title>Novo Pedido</Title>
                        <Inputs>
                            <InputClientName
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                placeholder={'Nome do cliente'}
                            />
                            <InputType
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                placeholder={'Tipo'}
                            />
                            <InputFlavor
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                placeholder={'Sabor'}
                            />
                            <InputSize
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                placeholder={'Tamanho'}
                            />
                            <InputValue
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                placeholder={'Valor (R$)'}
                                keyboardType={'numeric'}
                            />
                        </Inputs>
                        <Options>
                            <Back onPress={() => {this.props.navigation.navigate('Main')}}>
                                <BackText>Voltar</BackText>
                            </Back>
                            <Add onPress={() => {}}>
                                <AddText>Adicionar</AddText>
                            </Add>
                        </Options>
                    </ScrollView>
                </Container>
        );
    }
}
