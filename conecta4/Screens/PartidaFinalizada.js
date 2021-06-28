import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

export default class PartidaFinalizada extends Component{
    constructor(props){
        console.log('###PartidaFinalizada###')
        super(props)
        this.GuardarVictoria()
    }

    GuardarVictoria = () =>{
        console.log('---->GuardarVictoria()')
        console.log('idPartida: ',  this.props.route.params.idPartida)
        console.log('ganador: ',    this.props.route.params.ganador)
        console.log('duracion: ',   this.props.route.params.duracion)
        console.log('movTotales: ', this.props.route.params.movTotales)
        console.log('movGanador: ', this.props.route.params.movGanador)
        fetch('http://192.168.0.156:3000/addVictoria',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                idPartida : this.props.route.params.idPartida,
                ganador   : this.props.route.params.ganador,
                duracion  : this.props.route.params.duracion,
                movTotales: this.props.route.params.movTotales,
                movGanador: this.props.route.params.movGanador
            })
        })
        .then(response =>response.json())
        .then(data => {
            if(data['msj']){
                console.log('idVictoria: [', data['idVictoria'], ']')
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        return(
            <View style={Styles.container}>
                <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginVertical:15}}>¡Partida Finalizada!</Text>
                <Text style={{color:'white', fontSize:18,marginVertical:5}}>
                    {this.props.route.params.ganador ==null?'Empate':  'Ganador:\t'+this.props.route.params.ganador} </Text>
                <Text style={{color:'white', fontSize:18,marginVertical:5}}>Duración:{'\t'+this.props.route.params.duracion} </Text>
                <Text style={{color:'white', fontSize:18,marginVertical:5}}>Movimientos totales:{'\t'+this.props.route.params.movTotales} </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Nueva Partida')} style={[Styles.boton,{marginTop:20}]}>
                    <Text style={{color:'white', fontSize:16}}>Nuevo Juego</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Inicio')} style={Styles.boton}>
                    <Text style={{color:'white', fontSize:16}}>Pantalla inicial</Text>
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
    },
    boton:{
        borderRadius:15,
        height:70,
        alignItems:"center",
        justifyContent:"center",
        borderColor:'white',
        borderWidth:1,
        marginVertical:15,
        width:Dimensions.get('window').width-150
    }
})