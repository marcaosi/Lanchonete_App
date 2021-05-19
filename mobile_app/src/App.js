import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
      <ScrollView
        contentContainerStyle={{flex: 1}}
      >
          <Home/>
      </ScrollView>
  )
}

export default App