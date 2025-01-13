import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Apps = () => {
  useEffect(() => {
    console.log('Inside UseEffect');
  }, []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apps</Text>
    </View>
  );
};

export default Apps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
});
