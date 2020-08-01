import React, {Component} from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';

import {format} from 'date-fns';
import PT_BR from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/AntDesign';

import {
    Container,
    Title,
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
            this.setState({order: {dateSelected: new Date(date)}});
            this.setState({datePicker: {show: false}});
            console.log("Ended if -> handleDateChanged");
        }
        this.setState({datePicker: {show: false}});
    }

    componentDidUpdate(){
        console.log("Updated");
    }

    render(){
        console.log("Rendered");
        return(
            <Container>
                <Title>Selecione a data de entrega</Title>

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