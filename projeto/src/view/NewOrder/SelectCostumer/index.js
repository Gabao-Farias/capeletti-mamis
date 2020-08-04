import React, { Component } from 'react';

import getRealm from '../../../services/realm';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {
    Container,
    Title,
    Progress,
    IconSpace,
    ListContainer,
    CostumerList,
    CostumerContainer,
    Name,
    CostumerSelected,
    Options,
    Next,
    NextText,
    Back,
    BackText
} from './styles';

import { Alert } from 'react-native';

export default class SelectCostumer extends Component{

    state = {
        costumers: [],
        costumerSelected: "",
    };

    async loadExistentCostumers(){
        try{
            const realm = await getRealm();

            const data = realm.objects('Costumer').sorted('name');

            this.setState({costumers: data});
        }catch(err){
            Alert.alert("Erro", "Não foi possível estabelecer conexão com o banco de dados!");
            console.log(err);
        }
    }

    handleAvancar(){
        if(this.state.costumerSelected != ""){
            this.props.navigation.navigate("SelectType", this.state.costumerSelected);
        }else{
            Alert.alert("Não selecionou?", "Selecione um cliente antes!");
        }
    }

    componentDidMount(){
        this.loadExistentCostumers();
    }

    render(){
        return(
            <Container>
                <Title>Selecione o cliente</Title>

                <Progress>
                    <IconSpace>
                        <AntIcon name="user" size={30} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="pasta" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="food-steak" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#aaa" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="weight" size={20} color="#aaa" />
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
                
                <ListContainer>
                    <CostumerList
                        data={this.state.costumers}
                        keyExtractor={item => String(item.costumerID)}
                        renderItem={({item}) => (
                            <CostumerContainer onPress={() => {this.setState({costumerSelected: item.name})}}>
                                <Name>{item.name}</Name>
                            </CostumerContainer>
                        )}
                    />
                </ListContainer>
                <CostumerSelected>Cliente selecionado: {this.state.costumerSelected}</CostumerSelected>
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
