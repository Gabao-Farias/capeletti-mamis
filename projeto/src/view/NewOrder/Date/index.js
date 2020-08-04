import React, {Component} from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';

import {format} from 'date-fns';
import PT_BR from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {
    Container,
    Title,
    Progress,
    IconSpace,
    ShowPicker,
    PickedDate,
    Options,
    Next,
    NextText,
    Back,
    BackText
} from './styles';

export default class SelectDate extends Component{
    state = {
        order: {
            costumerSelected: this.props.route.params.costumerSelected,
            typeSelected: this.props.route.params.typeSelected,
            flavorSelected: this.props.route.params.flavorSelected,
            sizeSelected: this.props.route.params.sizeSelected,
            ammount: Number(this.props.route.params.ammount),
            dateSelected: new Date,
        },
        datePicker: {
            show: false,
            showMode: "date",
        }
    };

    handleAvancar(){
        const order = {
            costumerSelected: this.props.route.params.costumerSelected,
            typeSelected: this.props.route.params.typeSelected,
            flavorSelected: this.props.route.params.flavorSelected,
            sizeSelected: this.props.route.params.sizeSelected,
            ammount: Number(this.props.route.params.ammount),
            dateSelected: String(this.state.order.dateSelected),
        };

        this.props.navigation.navigate('ReviewOrder', order);
    }

    showDatePicker(){
        this.setState({datePicker: {show: true}});
    }

    handleDateChanged(event, date){
        if(event.type === "set"){
            this.setState({datePicker: {show: false}});
            this.setState({order: {dateSelected: new Date(date)}});            
        }
        this.setState({datePicker: {show: false}});
    }

    render(){
        return(
            <Container>
                <Title>Data de entrega</Title>

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
                        <MaterialCommunityIcon name="weight" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <MaterialCommunityIcon name="stack-overflow" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="arrowright" size={20} color="#fff" />
                    </IconSpace>
                    <IconSpace>
                        <AntIcon name="calendar" size={30} color="#fff" />
                    </IconSpace>
                </Progress>

                <ShowPicker onPress={() => {this.showDatePicker()}}>
                    <Icon name={"calendar"} size={36} color={"#8a0f74"} />
                </ShowPicker>
                
                <PickedDate>Data selecionada:</PickedDate>
                <PickedDate>{
                    format(
                        this.state.order.dateSelected,
                        "'Dia' dd 'de' MMMM 'de' yyyy",
                        {locale: PT_BR}
                    )}
                </PickedDate>

                {this.state.datePicker.show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.order.dateSelected}
                        mode={this.state.datePicker.showMode}
                        display={"default"}
                        onChange={(event, date) => {this.handleDateChanged(event, date)}}
                    />
                )}

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