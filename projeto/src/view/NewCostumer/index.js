import React, { Component } from 'react';
import { Alert } from 'react-native';

import getRealm from '../../services/realm';
import getNewIDCostumers from '../../services/IDProviderCostumers';
import costumerExists from '../../services/CostumerExists';

import {Container, Title, Inputs, InputText, Options, Back, BackText, Add, AddText} from './styles';


export default class NewCostumer extends Component {
    state = {
        costumerID: 0,
        name: "",
        costumers: [],
    };

    generateAlert(title, message){
        Alert.alert(title, message);
    }

    async defineNewID(){
        try{
            const realm = await getRealm();

            const objects = realm.objects('Costumer');

            this.setState({costumerID: Number(getNewIDCostumers(objects))});
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
            console.log(err);
        }
    }

    handleAddCostumer(){
        if(!costumerExists(this.state.name, this.state.costumers)){
            this.saveCostumer(this.state);

            this.setState({
                costumerID: 0,
                name: ''
            });

            this.defineNewID();
        }else{
            this.generateAlert("Já existe","O nome do cliente já foi cadastrado!");
        }
    }

    async loadExistentCostumers(){
        try{
            const realm = await getRealm();

            const data = realm.objects('Costumer');

            this.setState({costumers: data});
        }catch(err){
            this.generateAlert("Erro", "Não foi possível estabelecer conexão com o banco de dados!");
        }
    }

    componentDidMount(){
        this.loadExistentCostumers();
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
