import React, { Component } from "react";
import { Text , StyleSheet, View, Dimensions, TouchableOpacity, TextInput} from "react-native";


export default class NuevaPartida extends Component{
    constructor(props){
        super(props)
        this.state={
            jugador1:'Jugador 1',
            jugador2: 'Juegador 2'
        }
    }

    getDate(){
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        console.log(dateTime)
       return dateTime
    }
    IniciarJuego = () =>{
        console.log('---->IniciarJuego()')
        let fecha = this.getDate()
        console.log('jugador1: ', this.state.jugador1)
        console.log('jugador2: ', this.state.jugador2)
        console.log('Fecha: ', fecha)
        fetch('http://192.168.0.156:3000/addPartida',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                jugador1:this.state.jugador1,
                jugador2:this.state.jugador2,
                fechaHora:fecha
            })
        })
        .then(response =>response.json())
        .then(data => {
            if(data['msj']){
                console.log('idPartida: [', data['idPartida'][0], ']')
                this.props.navigation.navigate('Partida',{idPartida: data['idPartida'],
                                                            jugador1:this.state.jugador1,
                                                            jugador2:this.state.jugador2})
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        return(
            <View style={Styles.container}>
                <View style = {Styles.BotonContainer} >
                    <Text style={{fontSize:20, color:'white'}}>Jugador 1</Text>
                    <TextInput onChangeText={(text) => this.setState({jugador1:text})}
                        style = {Styles.input} placeholder='. . . .' placeholderTextColor='#a8a8a8'></TextInput>
                    <Text style={{fontSize:20, color:'white', marginTop:10}}>Jugador 2</Text>
                    <TextInput onChangeText={(text) => this.setState({jugador2:text})}
                         style = {Styles.input} placeholder='. . . .' placeholderTextColor='#a8a8a8'></TextInput>
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