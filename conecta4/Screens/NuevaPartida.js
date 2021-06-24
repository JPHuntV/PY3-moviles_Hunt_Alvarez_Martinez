import React, { Component } from "react";
import { Text , StyleSheet, View, Dimensions, TouchableOpacity, TextInput} from "react-native";


export default class NuevaPartida extends Component{
    constructor(props){
        super(props)
    }

    IniciarJuego = () =>{
        console.log('---->IniciarJuego()')
        this.props.navigation.navigate('Partida')
    }
    render(){
        return(
            <View style={Styles.container}>
                <View style = {Styles.BotonContainer} >
                    <Text style={{fontSize:20, color:'white'}}>Jugador 1</Text>
                    <TextInput style = {Styles.input} placeholder='. . . .' placeholderTextColor='#a8a8a8'></TextInput>
                    <Text style={{fontSize:20, color:'white', marginTop:10}}>Jugador 2</Text>
                    <TextInput style = {Styles.input} placeholder='. . . .' placeholderTextColor='#a8a8a8'></TextInput>
                    <TouchableOpacity style={Styles.boton} onPress={()=>this.IniciarJuego()}>
                        <Text style={{fontSize:26, color:'white', fontFamily:'Roboto'}}>
                            Iniciar juego
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:  "#1B1B1E",
        alignItems:"center",
        justifyContent:"center"
    },
    BotonContainer:{
        justifyContent:"center",
        flex:3,
        borderColor:'white',
        //borderWidth:0.3,
        width:Dimensions.get('window').width-50
    },
    boton:{
        borderRadius:15,
        resizeMode:"contain",
        width:undefined,
        height:70,
        alignItems:"center",
        justifyContent:"center",
        borderColor:'white',
        borderWidth:1,
        marginVertical:15
    },
    input:{
        borderRadius:15,
        height:70,
        alignItems:"center",
        justifyContent:"center",
        borderColor:'white',
        borderWidth:1,
        marginVertical:15,
        fontSize:26,
        color:'white',
        textAlign:"center"
    }

})