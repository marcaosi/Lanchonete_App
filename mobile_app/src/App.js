import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text>Lanchonete e Pastelaria da Maria Helena</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App