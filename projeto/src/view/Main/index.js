import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class Main extends Component {

    render(){
        return(
            <>
                <View style={styles.container}>
                    <Text style={styles.text}>Home</Text>
                    <View style={styles.box}/>
                    <Button title="New Register" onPress={() => this.props.navigation.navigate("NewRegister")}/>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
    },

    text:{
        fontSize: 18,
        color: "#ddd",
    },

    box:{
        width: 100,
        height: 100,
        backgroundColor: "#999",
        borderRadius: 20,
        margin: 10,
    }
})
