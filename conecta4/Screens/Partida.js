import React, { Component } from "react";
import { Text , StyleSheet, View, Dimensions, TouchableOpacity, TextInput, Image} from "react-native";
import Draggable from 'react-native-draggable'

export default class Partida extends Component{
    constructor(props){
        super(props)
        this.startDate = null
        this.endDate = null
        this.idPartida=1
        this.state = {
            jugador1:'Jean Hunt',
            jugador2:'Sara Chacón',
            jugadorActual:1,
            movimientosJ1:0,
            movimientosJ2:0,
            ganador:null,
            //movimientosTotales: movimientosj1 + movimientosj2
            testx:140,//ojo
            offsetCarril:0,
            dragging:null,
            fichasItems:[],
            dragX:null,
            dragY:null
        }
        this.initFichas()
    }

    cambiarFicha(jugadorActual, estado){
        if(jugadorActual == this.state.jugadorActual){
            if(estado == 1)
                this.setState({testx:Carril})
            else if(estado == 0)
                this.setState({testx:140})
        }
    }

    identificarCarril(e){
        this.setState({dragging:true})
        if(e.nativeEvent.pageX<Carril*1){
            this.setState({offsetCarril:0})
        }
        else if(e.nativeEvent.pageX>Carril && e.nativeEvent.pageX<Carril*2){
            this.setState({offsetCarril:1})
        }
        else if(e.nativeEvent.pageX>Carril*2 && e.nativeEvent.pageX<Carril*3){
            this.setState({offsetCarril:2})
        }
        else if(e.nativeEvent.pageX>Carril*3 && e.nativeEvent.pageX<Carril*4){
            this.setState({offsetCarril:3})
        }
        else if(e.nativeEvent.pageX>Carril*4 && e.nativeEvent.pageX<Carril*5){
            this.setState({offsetCarril:4})
        }
        else if(e.nativeEvent.pageX>Carril*5 && e.nativeEvent.pageX<Carril*6){
            this.setState({offsetCarril:5})
        }
        else if(e.nativeEvent.pageX>Carril*6){
            this.setState({offsetCarril:6})
        }
        this.setState({dragX:e.nativeEvent.pageX, dragY:e.nativeEvent.pageY})

    }

    initFichas=()=>{
        console.log('initFichas()')
        for (let i = 0; i < 42; i++) {
            this.state.fichasItems.push(<View key={i} style = {[Styles.pieza, Styles.noPieza]}></View>)   
        }
        for (let i = 0; i < fichas.length; i++) {
            console.log(fichas[i].toString())
        }
    }

    setFicha=()=>{
        console.log('--->setFichas()')
        if(this.state.dragY<=650 &&this.state.dragY>150){
            console.log('aaaaa  ', this.state.movimientosJ1 +this.state.movimientosJ2)
            if(this.state.movimientosJ1 + this.state.movimientosJ2==0){
                this.startDate = new Date().getTime()
                console.log(this.startDate)
            }
            for (let i = 5; i >= 0; i--) {
                if(fichas[i][this.state.offsetCarril] ==-1){
                    fichas[i][this.state.offsetCarril] =this.state.jugadorActual
                    break
                }
            }
            ///////
            console.log('dragpos: ', this.state.dragX, this.state.dragY)
            console.log('carril: ',this.state.offsetCarril,'\n')
            console.log('jugadorActual: ', this.state.jugadorActual)
            if(this.state.jugadorActual == 1){
                this.setState({movimientosJ1:this.state.movimientosJ1+1})
                this.setState({jugadorActual:2})
            }
            else if (this.state.jugadorActual == 2){
                this.setState({movimientosJ2:this.state.movimientosJ2+1})
                this.setState({jugadorActual:1})
            }
            for (let i = 0; i < fichas.length; i++) {
                console.log(fichas[i].toString())
            }
            //////
            this.setState({fichasItems:[]},()=>this.renderFicha())
            this.setState({dragging:null})

        }
        return null
    }

    renderFicha(){
        let keyItem = 0
        for (let i = 0; i < fichas.length; i++) {
            for (let j = 0; j < fichas[i].length; j++) {
                if(fichas[i][j]==-1)
                    this.state.fichasItems.push(<View key={keyItem} style = {[Styles.pieza, Styles.noPieza]}></View>) 
                else if(fichas[i][j]==1)
                    this.state.fichasItems.push(<View key={keyItem} style = {[Styles.pieza, Styles.j1Pieza]}></View>) 
                else if(fichas[i][j]==2)
                    this.state.fichasItems.push(<View key={keyItem} style = {[Styles.pieza, Styles.j2Pieza]}></View>) 
                keyItem++
            }
               
        }
        this.setState({fichasItems:this.state.fichasItems})
        let ganador = this.checkWin(fichas)
        if(ganador != -1){ 
            if(ganador == 1){
                let movimientosGanador = this.state.movimientosJ1
                this.setState({ganador:this.state.jugador1},()=>this.terminarPartida(movimientosGanador))
            }
            else{
                let movimientosGanador = this.state.movimientosJ2
                this.setState({ganador:this.state.jugador2},()=>this.terminarPartida(movimientosGanador)) 
            }
        }
    }

    terminarPartida=(movimientosGanador)=>{
        this.endDate = new Date().getTime()
        let movimientosTotales = this.state.movimientosJ1 + this.state.movimientosJ2
        console.log('idPartida: ', this.idPartida)
        console.log('ganador: ', this.state.ganador)
        console.log('Tiempo = ', (this.endDate - this.startDate)/1000)
        console.log('MovimientosTotales: ',movimientosTotales)
        console.log('Movimientos Ganador: ', movimientosGanador)
        this.props.navigation.navigate('Partida Finalizada',{idPartida: this.idPartida,
                                                            ganador:this.state.ganador,
                                                            duracion: (this.endDate - this.startDate)/1000,
                                                            movTotal: movimientosTotales,
                                                            movGanador: movimientosGanador})
    }

    renderCarril = ()=>{
        if(this.state.dragY<=650 &&this.state.dragY>150){
            if(this.state.dragging){
                return(
                    <View key={6} style = {[Styles.carril,{marginLeft:Carril*this.state.offsetCarril+2}]}>
                        <View style = {[Styles.fichaCarril,{backgroundColor:this.state.jugadorActual == 1 ? '#FF4000':'#016FB9'}]}>  
                        </View>
                    </View>
                )
            }
        }
        return null        
    }

    checkWin(board){
        const HEIGHT = board.length;
        const WIDTH = board[0].length;
        const EMPTY_SLOT = -1;
        for (let r = 0; r < HEIGHT; r++) { // iterate rows, bottom to top
            for (let c = 0; c < WIDTH; c++) { // iterate columns, left to right
                let player = board[r][c];
                if (player == EMPTY_SLOT)
                    continue; // don't check empty slots
                if (c + 3 < WIDTH &&
                    player == board[r][c+1] && // look right
                    player == board[r][c+2] &&
                    player == board[r][c+3])
                    return player;
                if (r + 3 < HEIGHT) {
                    if (player == board[r+1][c] && // look up
                        player == board[r+2][c] &&
                        player == board[r+3][c])
                        return player;
                    if (c + 3 < WIDTH &&
                        player == board[r+1][c+1] && // look up & right
                        player == board[r+2][c+2] &&
                        player == board[r+3][c+3])
                        return player;
                    if (c - 3 >= 0 &&
                        player == board[r+1][c-1] && // look up & left
                        player == board[r+2][c-2] &&
                        player == board[r+3][c-3])
                        return player;
                }
            }
        }
        return EMPTY_SLOT; // no winner found
    }

    render(){
        return(
            <View style={Styles.container}>
                <View style={{
                            flexDirection:"row",
                            width:Dimensions.get('window').width,
                            
                            alignItems:"center",
                            justifyContent:"center"
                            }}>
                    <Image source={require('../img/move.png')}></Image>
                    <Text style={{color:'white', marginLeft:10, fontSize:20}}>{this.state.movimientosJ1 + this.state.movimientosJ2}</Text>
                </View>
                <View style={Styles.juegoContainer}>
                    <View style={Styles.tableroContainer}>
                        {this.state.fichasItems}
                    </View>
                    <View style={Styles.test}>
                        <this.renderCarril/>
                    </View>
                </View>
                <View style = {Styles.jugadoresContainer}>
                    <View style={{flex:2,flexDirection:"row", height:60,
                            alignItems:"center",borderColor:'white', justifyContent:'flex-start', borderRightWidth:0.5}}>
                        <View 
                            style={[Styles.fichaMov,Styles.j1Pieza]}>
                            <Text style={{color:'white', fontSize:20}}>{this.state.movimientosJ1}</Text>
                        </View>
                        <Text style={{fontSize:18, color:'white'}}>{this.state.jugador1}</Text>
                    </View>
                    <View style={{flex:2,flexDirection:"row",justifyContent:'flex-end', height:60,
                            alignItems:"center",borderColor:'white', borderLeftWidth:0.5}}>
                        <Text style={{fontSize:18, color:'white'}}>{this.state.jugador2}</Text>
                        <View 
                            style={[Styles.fichaMov, Styles.j2Pieza]}>
                                <Text style={{color:'white', fontSize:20}}>{this.state.movimientosJ2}</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.fichasContainer}>
                    <View style = {{flex:2,/* borderColor:'white', borderWidth:0.2, */alignItems:"center",justifyContent:"center", alignContent:"center"}}>
                    <Draggable shouldReverse x={30} minX={30} maxX={30}
                                y={0}  minY={0} maxY={0} onDrag={(e)=>{this.identificarCarril(e)}}
                                onDragRelease={(e)=>{this.setFicha(e)}}
                                disabled={this.state.jugadorActual == 1 ? false:true}
                                style={{flex:1}}
                    >
                        <View onTouchStart={(e)=>this.cambiarFicha(1,1)}
                              onTouchEnd={(e)=>this.cambiarFicha(1,0)}
                              style ={[Styles.fichaJuego, Styles.j1Pieza,{opacity:this.state.jugadorActual == 1 ? 1:0.2}]}></View>
                    </Draggable>
                    </View>
                    <View style = {{flex:2, /*borderColor:'white', borderWidth:0.2, */alignItems:"center",justifyContent:"center"}}>
                    <Draggable shouldReverse x={30} minX={30} maxX={30}
                                y={0}  minY={0} maxY={0} onDrag={(e)=>{this.identificarCarril(e)}}
                                onDragRelease={(e)=>{this.setFicha(e)}}
                                disabled={this.state.jugadorActual == 2 ? false:true}
                    >
                        <View style = {[Styles.fichaJuego, Styles.j2Pieza,{opacity:this.state.jugadorActual == 2 ? 1:0.2}]}></View>
                    </Draggable>
                    </View>
                </View>
            </View>
        )
    }
}

let fichas = [
    [-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1]
]

const Carril = (Dimensions.get('window').width-15)/7
let piezaCarril = Carril*6+2
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
        width:Dimensions.get('window').width-20,
        height:Dimensions.get('window').width-50,
        marginTop:150,
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        flexWrap:"wrap",
    },
    pieza:{
        width:(Dimensions.get('window').width-30)/8,
        height:(Dimensions.get('window').width-30)/8,
        borderRadius:80,
        margin:4,
        borderWidth:1,
       
    },
    noPieza:{
        borderColor:'white',
        backgroundColor:'#1B1B1E'
    },
    j1Pieza:{
        borderColor:'white',
        backgroundColor:'#FF4000',
    },
    j2Pieza:{

        borderColor:'white',
        backgroundColor:'#016FB9'
    },
    jugadoresContainer:{
        marginVertical:10,
        flexDirection:"row",
        width:Dimensions.get('window').width-10,
        position:"relative"
        
    },
    fichasContainer:{
        marginTop:10,
        flexDirection:"row",
        resizeMode:"contain",
        height:140,
        width:Dimensions.get('window').width-10,
        position:"relative"
    },
    juegoContainer:{
        position:"relative",
        alignItems:"center",
        width:Dimensions.get('window').width-15,
    },
    test:{
        resizeMode:"contain",
        width:Dimensions.get('window').width-13,
        height:Dimensions.get('window').width+100,
        position:"absolute",
        //paddingHorizontal:5,
        flexDirection:"row"
    },
    carril:{
        width:Carril,
        backgroundColor:'gray',
        opacity:0.3,
        marginTop:50,
        borderRadius:30
        //height:Dimensions.get('window').width+150,
        
    },
    fichaMov:{
        width:45,
        height:45,
        borderWidth:1,
        borderRadius:60,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:4
    },
    fichaJuego:{
        borderWidth:2, 
        height:140, 
        width:140, 
        borderRadius:80, 
        position:"relative"
    },
    fichaCarril:{
        borderColor:'white',
        borderWidth:2,
        height:Carril, 
        width:Carril, 
        borderRadius:60,
        marginTop:1,
        position:"relative",
        opacity:2
        
    
    }
})