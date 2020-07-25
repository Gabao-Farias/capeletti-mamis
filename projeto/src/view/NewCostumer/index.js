import React, { Component } from 'react';
import { Alert } from 'react-native';

import getRealm from '../../services/realm';
import getNewIDCostumers from '../../services/IDProvider';

import {Container, Title, Inputs, InputText, Options, Back, BackText, Add, AddText} from './styles';


export default class NewCostumer extends Component {
    state = {
        costumerID: 0,
        name: "",
    };

    generateAlert(title, message){
        Alert.alert(title, message);
    }

    async defineNewID(){
        try{
            const realm = await getRealm();

            const objects = realm.objects('Costumer');

            this.setState({costumerID: Number(getNewIDCostumers(objects))})
        }catch(err){
            this.generateAlert("Erro", "Problema ao gerar um novo ID!");
        }
    }

    async saveCostumer(costumer){
        try{
            const data = {
                costumerID: costumer.costumerID,
                name: costumer.name
            }

            const realm = await getRealm();

            realm.write(() => {
                realm.create('Costumer', data);
            });

            this.generateAlert("Concluído", "Cliente registrado com sucesso!");

        }catch(err){
            this.generateAlert("Erro", "Problema ao salvar cliente!")
        }
    }

    handleAddCostumer(){
        this.saveCostumer(this.state);

        this.setState({
            costumerID: 0,
            name: ''
        });

        this.defineNewID();
    }

    componentDidMount(){
        this.defineNewID();
    }

    render(){
        return(
            <Container>
                <Title>Novo Cliente</Title>
                <Inputs>
                    <InputText
                        value={this.state.name}
                        onChangeText={text => this.setState({name: text})}
                        textAlign='center'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        placeholder={'Nome do cliente'}
                    />
                </Inputs>
                <Options>
                    <Back onPress={() => {this.props.navigation.goBack()}}>
                        <BackText>Voltar</BackText>
                    </Back>
                    <Add onPress={() => {this.handleAddCostumer()}}>
                        <AddText>Adicionar</AddText>
                    </Add>
                </Options>
            </Container>
        );
    }
}
