import React, { Component } from "react";
import { Text , StyleSheet, View, Dimensions, TouchableOpacity, TextInput} from "react-native";
import Draggable from 'react-native-draggable'

export default class Partida extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.juegoContainer}>
                    <View style={Styles.tableroContainer}>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                        <View style = {Styles.pieza}></View>
                    </View>
                    <View style={Styles.test}>
                        <View style = {Styles.carril} onTouchMove={()=>console.log('a')} ></View>
                        <View style = {Styles.carril}></View>
                        <View style = {Styles.carril}></View>
                        <View style = {Styles.carril}></View>
                        <View style = {Styles.carril}></View>
                        <View style = {Styles.carril}></View>
                        <View style = {Styles.carril}></View>

                    </View>
                </View>
                <View style = {Styles.jugadoresContainer}>
                    <View style={{flex:2,flexDirection:"row", height:60,
                            alignItems:"center",borderColor:'white', justifyContent:'flex-start', borderRightWidth:0.5}}>
                        <View 
                            style={{
                                width:45,
                                height:45,
                                borderColor:'white',
                                borderWidth:1,
                                borderRadius:60,
                                justifyContent:"center",
                                alignItems:"center",
                                marginHorizontal:4
                            }}>
                                <Text style={{color:'white', fontSize:20}}>20</Text>
                        </View>
                        <Text style={{fontSize:18, color:'white'}}>Jean Hunt Hun</Text>
                    </View>
                    <View style={{flex:2,flexDirection:"row",justifyContent:'flex-end', height:60,
                            alignItems:"center",borderColor:'white', borderLeftWidth:0.5}}>
                        <Text style={{fontSize:18, color:'white'}}>Jean Hunt Hun</Text>
                        <View 
                            style={{
                                width:45,
                                height:45,
                                borderColor:'white',
                                borderWidth:1,
                                borderRadius:60,
                                justifyContent:"center",
                                alignItems:"center",
                                marginHorizontal:4
                            }}>
                                <Text style={{color:'white', fontSize:20}}>20</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.fichasContainer}>
                    <View style = {{flex:2, borderColor:'white', borderWidth:0.2, alignItems:"center",justifyContent:"center", alignContent:"center"}}>
                    <Draggable shouldReverse>
                        <View style = {{borderColor:'white', borderWidth:2, height:80, width:80, borderRadius:80, position:"relative"}}></View>
                        </Draggable>
                    </View>
                    <View style = {{flex:2, borderColor:'white', borderWidth:0.2, alignItems:"center",justifyContent:"center"}}>
                        <View style = {{borderColor:'white', borderWidth:2, height:140, width:140, borderRadius:80}}></View>
                    </View>
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
    tableroContainer:{
        backgroundColor:'white',
        borderRadius:15,
        resizeMode:"contain",
        width:Dimensions.get('window').width-10,
        height:Dimensions.get('window').width-50,
        marginTop:200,
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        flexWrap:"wrap"
    },
    pieza:{
        width:(Dimensions.get('window').width-30)/8,
        height:(Dimensions.get('window').width-30)/8,
        borderColor:'white',
        borderRadius:80,
        margin:4,
        borderWidth:1,
        backgroundColor:'#1B1B1E'
    },
    jugadoresContainer:{
        marginVertical:10,
        flexDirection:"row",
        borderWidth:1,
        width:Dimensions.get('window').width-10,
        position:"relative"
        
    },
    fichasContainer:{
        marginVertical:10,
        flexDirection:"row",
        width:Dimensions.get('window').width-10,
        position:"relative"
    },
    juegoContainer:{
        position:"relative",
        borderWidth:1,
        borderColor:'green',
        
    },
    test:{
        borderColor:'red',
        borderRadius:15,
        borderWidth:1,
        resizeMode:"contain",
        width:Dimensions.get('window').width-10,
        height:Dimensions.get('window').width+150,
        position:"absolute",
        paddingHorizontal:5,
        flexDirection:"row"
    },
    carril:{
        flex:7,
        borderColor:'yellow',
        borderWidth:1,
        //height:Dimensions.get('window').width+150,
        
    }

})