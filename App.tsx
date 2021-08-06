/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView style={styles.scrollview} >
        <Text>Hacker News App</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  scrollview: {},
});

export default App;
