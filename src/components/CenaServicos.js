import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Image, Text} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar backgroundColor = '#19D1C8'></StatusBar>
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8'></BarraNavegacao>
        <View style={styles.cabecalho}>
            <Image source={detalheServico}/>
            <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>
        <View style={styles.detalheServico}>
            <Text style={styles.txtDetalheServico}>- Consultoria</Text>
            <Text style={styles.txtDetalheServico}>- Processos</Text>
            <Text style={styles.txtDetalheServico}>- Acompanhamento de Projetos</Text>
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
        color: "#19D1C8",
        marginLeft: 10
    },
    detalheServico: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheServico: {
        fontSize: 18
    }
  });
  