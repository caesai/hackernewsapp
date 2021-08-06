import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, Linking} from 'react-native';
import axios from 'axios'

import {USER_ENDPOINT} from '../../constants'

export default function StoryPreview({story} : {story: any}) {
  const [karmaScore, setKarmaScore] = useState(0);
  useEffect(() => {
      axios
      .get(USER_ENDPOINT + story.by + '.json')
      .then(({data}) => {
        setKarmaScore(data.karma)
      });
    
  }, []);
  return (
    <View style={styles.story}>
      <Text style={styles.title}>{story.title}</Text>
      <Text>{new Date(story.time * 1000).toLocaleDateString()}</Text>
      <Text>Author: {story.by}</Text>
      <Text>Karma score: {karmaScore}</Text>
      <Text>Story score: {story.score}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(story.url)}>
        Story URL: {story.url}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  story: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  link: {
    color: 'blue',
  },
});
