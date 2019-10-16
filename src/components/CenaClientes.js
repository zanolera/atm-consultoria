import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Image, Text} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar backgroundColor = '#B9C941'></StatusBar>
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#B9C941'></BarraNavegacao>
        <View style={styles.cabecalho}>
            <Image source={detalheCliente}/>
            <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>
        <View style={styles.detalheCliente}>
            <Image source={cliente1}/>
            <Text style={styles.txtDetalheCliente}>Texto do cliente 1</Text>
        </View>
        <View style={styles.detalheCliente}>
            <Image source={cliente2}/>
            <Text style={styles.txtDetalheCliente}>Texto do cliente 2</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    txtTitulo: {
        fontSize: 30,
        color: "#B9C941",
        marginLeft: 10
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente:{
        fontSize: 18,
        marginLeft: 20
    }
  });
  