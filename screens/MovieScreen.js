import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const MovieScreen = ({ route }) => {
  const { character } = route.params;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Promise.all(character.films.map(url => axios.get(url)))
      .then(results => {
        setMovies(results.map(res => res.data));
      });
  }, []);

  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.movieCard}>
              <Text>{item.title}</Text>
              <Text>Director: {item.director}</Text>
              <Text>Release Date: {item.release_date}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No movies available</Text>
      )}
      <Text style={styles.footer}>atitus-123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  movieCard: { padding: 20, backgroundColor: '#e0e0e0', marginVertical: 10 },
  footer: { marginTop: 20, textAlign: 'center', color: '#aaa' },
});

export default MovieScreen;
