import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';

const colors = ["#EBD9B4","#9DBC98","#638889"]

export default function App() {
  const [reloj, setReloj] = useState(false);
  const [tiempo, setTiempo] = useState(25*60);
  const [tiempoTranscurrido, setTiempotranscurrido] = useState('POMO'|'SHORT'|'BREAK');



  return (
    <SafeAreaView style={styles.container}>
    <View style={{paddingTop: Platform.OS === "android" && 30 }} >
      <Text style={styles.text}>Pomodoro 🍅</Text>
      <Text style={styles.text}>{tiempo}</Text>
      <Header 
      tiempoTranscurrido={tiempoTranscurrido}
      setTiempo={setTiempo} 
      setTiempotranscurrido={setTiempotranscurrido} />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 32, 
    fontWeight: 'bold',
    marginTop: 30
  },
});
