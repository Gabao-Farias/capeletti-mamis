import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';

import getRealm from '../../services/realm';
import getNewID from '../../services/IDProvider'

import {Container, Title, Inputs, InputDescription, InputValue, Options, Back, BackText, Add, AddText} from './styles';

export default class NewSpent extends Component {

    state = {
        id: 0,
        description: '',
        value: '',
        date: '',
    }

    async defineNewID(){
        const realm = await getRealm();

        const objects = realm.objects('Spent');

        this.setState({id: Number(getNewID(objects))});
    }

    async saveSpent(spent){
        try{
            const data = {
                id: spent.id,
                description: spent.description,
                value: Number(spent.value),
                date: new Date
            }

            const realm = await getRealm();

            realm.write(() => {
                realm.create('Spent', data);
            });

            this.generateAlert('Concluído', 'Gasto registrado com sucesso!');

        }catch(err){
            this.generateAlert('Erro', 'Problema ao salvar os dados no banco de dados!\n' + err);
        }
    }

    handleAddSpent(){
        this.saveSpent(this.state);

        this.setState({
            id: 0,
            description: '',
            value: '',
            date: '',
        });

        this.defineNewID();
    }

    generateAlert(title, message){
        Alert.alert(title, message);
    }

    componentDidMount(){
        this.defineNewID();
        console.log(this.state.id);
    }

    render(){
        return(
            <Container>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                >
                    <Title>Novo Gasto</Title>
                    <Inputs>
                        <InputDescription
                            value={this.state.description}
                            onChangeText={text => this.setState({description: text})}
                            textAlign='center'
                            autoCapitalize={'sentences'}
                            autoCorrect={false}
                            placeholder={'Descrição do gasto'}
                        />
                        <InputValue
                            value={this.state.value}
                            onChangeText={text => this.setState({value: text})}
                            textAlign='center'
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
                        <Add onPress={() => {this.handleAddSpent()}}>
                            <AddText>Adicionar</AddText>
                        </Add>
                    </Options>
                </ScrollView>
            </Container>
        );
    }
}