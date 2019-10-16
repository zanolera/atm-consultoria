import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Image, Text} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar backgroundColor = '#EC7148'></StatusBar>
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148'></BarraNavegacao>
        <View style={styles.cabecalho}>
            <Image source={detalheEmpresa}/>
            <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.detalheEmpresa}>
            <Text style={styles.txtDetalheEmpresa}>Texto sobre a história da empresa pew pew pew</Text>
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
        color: "#EC7148",
        marginLeft: 10
    },
    detalheEmpresa: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheEmpresa: {
        fontSize: 18
    }
  });
  