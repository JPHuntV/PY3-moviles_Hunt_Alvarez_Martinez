import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class PartidaFinalizada extends Component{
    constructor(props){
        console.log('###PartidaFinalizada###')
        super(props)
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text style={{color:'white'}}>Partida Finalizada</Text>
                <Text style={{color:'white'}}>Gandor:{'\t'+this.props.route.params.ganador} </Text>
                <Text style={{color:'white'}}>Duración:{'\t'+this.props.route.params.duracion} </Text>
                <Text style={{color:'white'}}>Movimientos totales:{'\t'+this.props.route.params.movTotal} </Text>
                <TouchableOpacity>
                    <Text style={{color:'white', borderColor:'white', borderWidth:1, borderRadius:15}}>Nuevo Juego</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:'white', borderColor:'white', borderWidth:1, borderRadius:15}}>Pantalla inicial</Text>
                </TouchableOpacity>
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
    }
})