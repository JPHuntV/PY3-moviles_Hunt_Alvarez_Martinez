import React, { Component } from "react";
import { Text , StyleSheet, View, Dimensions, TouchableOpacity, Image} from "react-native";


export default class Inicio extends Component{
    constructor(props){
        super(props)
    }

    NuevaPartida = () =>{
        console.log('--->NuevaPartida()')
        this.props.navigation.navigate('Nueva Partida')
    }

    VerEstadisticas = () =>{
        console.log('--->VerEstadisticas()')
        this.props.navigation.navigate('Estadísticas')
    }
    render(){
        return(
            <View style={Styles.container}>
                <View style = {Styles.LogoContainer}>
                    <Image source={require('../img/logo-CONECTA4.png')}></Image>
                </View>
                <View style = {Styles.BotonContainer} >
                    <TouchableOpacity style={Styles.boton} onPress={()=>this.NuevaPartida()}>
                        <Text style={{fontSize:26, color:'white', fontFamily:'Roboto'}}>
                            Nueva Partida
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.boton} onPress={()=>this.VerEstadisticas()}>
                        <Text style={{fontSize:26, color:'white', fontFamily:'Roboto'}}>Estadísticas</Text>
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
    LogoContainer:{
        marginTop:50,
        flex:3,
        width:Dimensions.get('window').width-50,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        fontSize:40,
        color:'white'
    },
    BotonContainer:{
        marginVertical:30,
        flex:3,
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
    }
})