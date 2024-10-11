import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const VehicleScreen = ({ route }) => {
  const { character } = route.params;
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (character.vehicles.length > 0) {
      Promise.all(character.vehicles.map(url => axios.get(url)))
        .then(results => {
          setVehicles(results.map(res => res.data));
        });
    }
  }, []);

  return (
    <View style={styles.container}>
      {vehicles.length > 0 ? (
        <FlatList
          data={vehicles}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.vehicleCard}>
              <Text>{item.name}</Text>
              <Text>Model: {item.model}</Text>
              <Text>Passengers: {item.passengers}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No vehicles available</Text>
      )}
      <Text style={styles.footer}>atitus-123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  vehicleCard: { padding: 20, backgroundColor: '#e0e0e0', marginVertical: 10 },
  footer: { marginTop: 20, textAlign: 'center', color: '#aaa' },
});

export default VehicleScreen;
