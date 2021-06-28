import React, { Component } from 'react'
import { render } from 'react-dom'
import { StyleSheet, View, Text, TouchableOpacity , Image, Dimensions, ScrollView} from 'react-native'
import { color } from 'react-native-reanimated'

export default class Estadisticas extends Component{
    constructor(props){
        console.log('###Estadisticas###')
        super(props)
        this.state={
            topVictorias:null,
            topVictoriasItems:[],
            menorMovimientosItems:[],
            empatesItems:[]
        }
        this.getTopVictorias()
        this.getMenorMovimientos()
        this.getEmpates()
    }

    getTopVictorias=()=>{
        fetch('http://192.168.0.156:3000/getTopVictorias',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response =>response.json())
        .then(data => this.renderTopVictorias(data['datos']))
        .catch(error =>{
            console.log(error)
        })
    }

    renderTopVictorias=(datos)=>{
        let index = 1
        datos.forEach(element => {
            console.log(element['ganador']) 
            this.state.topVictoriasItems.push(
                <View key={index} style={{width:Dimensions.get('window').width,
                             flexDirection:'row', alignItems:'center', marginVertical:10}}>
                    <View style={{flex:3, alignItems:'center'}}>
                        <View style={[{ borderWidth:1, borderColor:'white', borderRadius:60, width:35, height:35,
                                justifyContent:'center', alignItems:'center'}]}>
                            <Text style={{color:'white', fontSize:16}}>{index}</Text>
                        </View>
                    </View>
                    <View style={{flex:3, alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>{element['ganador']}</Text></View>
                    <View style={{flex:3, alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>{element['Cantidad']}</Text></View>
                </View>
            )
            index++
        });
        this.setState({topVictoriasItems:this.state.topVictoriasItems})
    }

    getMenorMovimientos=()=>{
        fetch('http://192.168.0.156:3000/getMenorMovimientos',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response =>response.json())
        .then(data => this.renderMenorMovimientos(data['datos']))
        .catch(error =>{
            console.log(error)
        })
    }

    renderMenorMovimientos=(datos)=>{
        let index = 1
        datos.forEach(element => {
            console.log(element['ganador']) 
            this.state.menorMovimientosItems.push(
                <View key={index} style={{width:Dimensions.get('window').width,
                            flexDirection:'row', alignItems:'center', marginVertical:10}}>
                    <View style={{flex:3, alignItems:'center'}}>
                        <View style={[{ borderWidth:1, borderColor:'white', borderRadius:60, width:35, height:35,
                                justifyContent:'center', alignItems:'center'}]}>
                            <Text style={{color:'white', fontSize:16}}>{index}</Text>
                        </View>
                    </View>
                    <View style={{flex:3, alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>{element['ganador']}</Text></View>
                    <View style={{flex:3, alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>{element['movGanador']}</Text></View>
                </View>
            )
            index++
        });
        this.setState({menorMovimientosItems:this.state.menorMovimientosItems})
    }

    getEmpates=()=>{
        fetch('http://192.168.0.156:3000/getEmpates',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response =>response.json())
        .then(data => this.renderEmpates(data['datos']))
        .catch(error =>{
            console.log(error)
        })
    }

    renderEmpates=(datos)=>{
        let index = 1
        datos.forEach(element => {
            this.state.empatesItems.push(
                <View key={index} style={{width:Dimensions.get('window').width,
                            flexDirection:'row', alignItems:'center', marginVertical:10}}>
                    <View style={{flex:2, alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>{element['usuario1']}</Text></View>
                    <View style={{flex:1, alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>Vs</Text></View>
                    <View style={{flex:2, alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>{element['usuario2']}</Text></View>
                </View>
            )
            index++
        });
        this.setState({empatesItems:this.state.empatesItems})
    }
    render(){
        return(
            <View style={Styles.container}>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <Text style={Styles.titleTop}>Top 5 cantidad de victorias</Text>       
                    </View>
                <View style={Styles.tablaTop}>
                    <View style={{flex:3, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Puesto</Text></View>
                    <View style={{flex:3, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Jugador</Text></View>
                    <View style={{flex:3, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Victorias</Text></View>
                </View>
                <View style={{borderColor:'white',marginBottom:15}}>
                   {this.state.topVictoriasItems}
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={Styles.titleTop}>Menor Cantidad de movimientos</Text>
                </View>
                <View style={Styles.tablaTop}>
                    <View style={{flex:3, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Puesto</Text></View>
                    <View style={{flex:3, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Jugador</Text></View>
                    <View style={{flex:3, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Movimientos</Text></View>
                </View>
                <View>
                   {this.state.menorMovimientosItems}
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={Styles.titleTop}>Empates</Text>
                </View>
                <View style={Styles.tablaTop}>
                    <View style={{flex:2, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Jugador 1</Text></View>
                    <View style={{flex:1}}></View>
                    <View style={{flex:2, alignContent:'center', alignItems:'center'}}><Text style={{color:'white'}}>Jugador 2</Text></View>
                </View>
                <View>
                    {this.state.empatesItems}
                </View>
                </ScrollView>
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
    tablaTop:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center', 
        borderColor:'white', 
        borderBottomWidth:0.2, 
        width:Dimensions.get('window').width,
        marginTop:10,
        marginBottom:5,
        padding:10
    },
    titleTop:{
        color:'white', 
        marginTop:20, 
        fontSize:22, 
        fontWeight:'bold'
    },
    puesto1:{
        
        backgroundColor:'red'
    },
    puesto2:{
        backgroundColor:'blue'
    },
    puesto3:{
        backgroundColor:'green'
    },
    puesto4:{
        backgroundColor:'yellow'
    },
    puesto5:{
        backgroundColor:'red'
    },
})