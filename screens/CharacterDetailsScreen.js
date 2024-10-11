import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CharacterDetailsScreen = ({ route, navigation }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <Text style={styles.info}>Height: {character.height}</Text>
      <Text style={styles.info}>Mass: {character.mass}</Text>
      <Text style={styles.info}>Hair Color: {character.hair_color}</Text>
      <Text style={styles.info}>Skin Color: {character.skin_color}</Text>
      <Text style={styles.info}>Eye Color: {character.eye_color}</Text>
      <Text style={styles.info}>Gender: {character.gender}</Text>
      <Button
        title="Vehicles"
        onPress={() => navigation.navigate('Vehicles', { character })}
      />
      <Button
        title="Movies"
        onPress={() => navigation.navigate('Movies', { character })}
      />
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
    color: '#FFF',
  },
  textWhite: {
    color: '#FFF',
  },
});

export default CharacterDetailsScreen;
