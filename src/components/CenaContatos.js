import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Image, Text} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheContato = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar backgroundColor = '#61BD8C'></StatusBar>
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C'></BarraNavegacao>
        <View style={styles.cabecalho}>
            <Image source={detalheContato}/>
            <Text style={styles.txtTitulo}>Nossos Contatos</Text>
        </View>
        <View style={styles.detalheContato}>
            <Text style={styles.txtDetalheContato}>TEL: (54) 1234-5678</Text>
            <Text style={styles.txtDetalheContato}>CEL: (54) 1234-5678</Text>
            <Text style={styles.txtDetalheContato}>Email: contato@atmconsultoria.com.br</Text>
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
        color: "#61BD8C",
        marginLeft: 10
    },
    detalheContato: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheContato: {
        fontSize: 18
    }
  });
  