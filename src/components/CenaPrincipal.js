import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Image, TouchableHighlight} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor = '#CCC'></StatusBar>
        <BarraNavegacao />
        <View style={styles.logo}>
          <Image source={logo}></Image>
        </View>
        <View style={styles.menu}>  
          <View style={styles.menuGrupo}>
            <TouchableHighlight 
              underlayColor={'#B9C941'}
              activeOpacity={0.3}
              onPress={() =>{
              this.props.navigator.push({ id:'cliente' });
            }}>
              <Image source={menuCliente} style={styles.imgMenu}></Image>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#61BD8C'}
              activeOpacity={0.3} 
              onPress={() =>{
              this.props.navigator.push({ id:'contato' });
            }}>
              <Image source={menuContato} style={styles.imgMenu}></Image>
            </TouchableHighlight>
          </View> 
          <View style={styles.menuGrupo}>
            <TouchableHighlight 
              underlayColor={'#EC7148'}
              activeOpacity={0.3}
              onPress={() =>{
              this.props.navigator.push({ id:'empresa' });
            }}>
            <Image source={menuEmpresa} style={styles.imgMenu}></Image>
            </TouchableHighlight>
            <TouchableHighlight 
              underlayColor={'#19D1C8'}
              activeOpacity={0.3}
              onPress={() =>{
              this.props.navigator.push({ id:'servico' });
            }}>
            <Image source={menuServico} style={styles.imgMenu}></Image>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
      alignItems: "center",
      marginTop: 30
    },
    menu: {
      alignItems: "center"
    },
    menuGrupo: {
      flexDirection: "row"
    },
    imgMenu: {
      margin: 20
    }
  });
  