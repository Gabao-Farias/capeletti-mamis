import React, { Component } from 'react';

import { ScrollView } from 'react-native';

import {Container, Title, Inputs, InputDescription, InputValue, Options, Back, BackText, Add, AddText} from './styles';

export default class NewSpent extends Component {

    render(){
        return(
            <Container>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                >
                    <Title>Novo Gasto</Title>
                    <Inputs>
                        <InputDescription
                            autoCapitalize={'sentences'}
                            autoCorrect={false}
                            placeholder={'Descrição do gasto'}
                        />
                        <InputValue
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            placeholder={'Valor (R$)'}
                            keyboardType={'numeric'}
                        />
                    </Inputs>
                    <Options>
                        <Back onPress={() => {this.props.navigation.goBack()}}>
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