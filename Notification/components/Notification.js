import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import closeIcon from '../../assets/close.png';

const Notification = ({ isOpen, error, info, actions }) => {
  return isOpen ?
    (<View style={ styles.wrapper }>
      <TouchableOpacity style={ styles.closeWrapper } onPress={ actions.closeNotification }>
        <Image style={ styles.closeIcon } source={ closeIcon }/>
      </TouchableOpacity>
      <Text style={ styles.text }>{ error || info }</Text>
    </View>) :
    null
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: -50,
    width: '100%',
    minHeight: 50,
    padding: 10,
    backgroundColor: '#EFDFDE'
  },
  closeWrapper: {
    position: 'absolute',
    zIndex: 1,
    right: 5,
    top: 5,
    width: 20,
    height: 20
  },
  closeIcon: {
    width: 15,
    height: 15
  },
  text: {
    color: '#a94442',
    textAlign: 'center'
  },
  error: {
    backgroundColor: '#EFDFDE'
  }
});

export default Notification;