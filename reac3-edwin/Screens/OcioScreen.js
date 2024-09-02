import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function OcioScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Fuera de servicio </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
