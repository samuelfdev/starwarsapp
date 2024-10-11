import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.info}>Criadores:</Text>
      <Text style={styles.info}>Samuel Ferreira (1134647)</Text>
      <Text style={styles.info}>Lucas Felipe Ferrari (1134435)</Text>
      <Text style={styles.info}>Nicolli Gomes de Ramos (1132087)</Text>
      <Text style={styles.info}>Emails:</Text>
      <Text style={styles.info}>1134647@atitus.edu.br (Samuel)</Text>
      <Text style={styles.info}>1134435@atitus.edu.br (Lucas)</Text>
      <Text style={styles.info}>1132087@atitus.edu.br (Nicolli)</Text>
      <Text style={styles.footer}>atitus-123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFE81F', 
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#aaa',
  },
});

export default AboutScreen;
