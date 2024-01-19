import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Tiempo from './src/components/Tiempo';
import {Audio} from 'expo-av'

const colores = ["#EBD9B4","#9DBC98","#638889"]

export default function App() {
  const [reloj, setReloj] = useState(false);
  const [tiempo, setTiempo] = useState(25*60);
  const [tiempoTranscurrido, setTiempotranscurrido] = useState('POMO'|'SHORT'|'BREAK');
  const [activo, setActivo]=useState(false)


  useEffect(() => {
    let interval = null;

    
    if(activo){
      //correr reloj 
      interval = setInterval(() => {
        setTiempo(tiempo - 1)
      }, 1000);
    }else{
      //limpiar el intervalo
      clearInterval(interval)
    }

    if(tiempo == 0) {
      setActivo(false);
      setReloj(prev =>!prev);
      setTiempo(reloj ? 300 : 1500)
    }

    return () => clearInterval(interval)


  }, [activo, tiempo])
  

  const handleStartStop = ()=>{
    playSound();
    setActivo(!activo)
  }

 async function playSound (){
     try {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/click.wav")
    );

    await sound.playAsync();

    // Esperar hasta que la reproducción termine o se pause
     sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish) {
        await sound.unloadAsync(); // Liberar recursos cuando la reproducción termina
      }
    });
  } catch (error) {
    console.error("Error al reproducir el sonido:", error);
  }
 }
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colores[tiempoTranscurrido]}]}>
    <View
     style={
      {
        flex:1,
        paddingHorizontal: 15,
        paddingTop: Platform.OS === "android" && 30,
       }}
       >
      <Text style={styles.text}>Pomodoro 🍅</Text>
      <Header 
      tiempoTranscurrido={tiempoTranscurrido}
      setTiempo={setTiempo} 
      setTiempotranscurrido={setTiempotranscurrido} />
      <Tiempo tiempo={tiempo} />
      <TouchableOpacity onPress={handleStartStop} style={styles.button}>
        <Text style={{color: "white", fontWeight: "bold"}}>
          {activo ? "STOP": "START"}
        </Text>
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" />
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
  button: {
    backgroundColor: "#333333",
    alignItems: "center",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  }
});
