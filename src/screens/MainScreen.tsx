/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {SafeAreaView, ScrollView,  StyleSheet, Text, } from 'react-native';
 import axios from 'axios';

 import {TOP_STORIES_ENDPOINT, STORY_ENDPOINT} from '../constants';
 import {requestTopStories} from '../store/actions';
 import {useAppDispatch, useAppSelector} from "../store/hooks";

 import StoryPreview from '../components/StoryPreview';
 
 const MainScreen: React.FC = () => {
   const [storiesIds, setStoriesIds] = useState([]);
   const stories = useAppSelector((state) => state.appReducer.topStories);
   const dispatch = useAppDispatch();
 
   useEffect(() => {
     axios
       .get(TOP_STORIES_ENDPOINT)
       .then(({data}) => {
         const tenRandomStories = data.sort(() => Math.random() - Math.random()).slice(0, 10);
         setStoriesIds(tenRandomStories);
       });
   }, []);
 
   useEffect(() => {
     storiesIds.map((storyId, ind) => {
       axios
       .get(STORY_ENDPOINT + storyId + '.json')
       .then(({data}) => {
         dispatch(requestTopStories(data))
       });
     })
     
   }, [storiesIds]);
 
   return (
     <SafeAreaView style={styles.backgroundStyle}>
       <ScrollView style={styles.scrollview}>
         <Text style={styles.headerTitle}>Hacker News App</Text>
         {stories.sort((a, b) => a.score - b.score).map((story: any, ind: any) => <StoryPreview story={story} key={ind} />)}
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
   headerTitle: {
       fontSize: 20,
       fontWeight: "bold",
       alignSelf: "center",
       marginBottom: 20
   },
 });
 
 export default MainScreen;
 