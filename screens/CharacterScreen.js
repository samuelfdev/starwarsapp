import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';  // Para usar o header

const CharacterScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [sound, setSound] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data.results.slice(0, 5));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/lightsaber.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.aboutButton}>Sobre</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Star Wars Characters</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.characterCard}
            onPress={() => {
              playSound();
              navigation.navigate('CharacterDetails', { character: item });
            }}
          >
            <Text style={styles.characterName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.footer}>atitus-123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
    marginBottom: 20,
  },
  characterCard: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  characterName: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: 'yellow',
  },
  aboutButton: {
    marginRight: 10,
    fontSize: 18,
    color: 'black', 
  },
});

export default CharacterScreen;
