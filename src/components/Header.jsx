import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const opciones = ["Pomodoro", "Short Break", "Long Break"]

const Header = ({ setTiempo, tiempoTranscurrido, setTiempotranscurrido }) => {

  const handlePress = (index) => {
    const nuevoTiempo = index === 0 ? 25 : index === 1 ? 5 : 15;
    setTiempotranscurrido(index);
    setTiempo(nuevoTiempo * 60)
  }


  return (
    <View style={{ flexDirection: "row" }}>
      {
        opciones.map((item, index) => (

          <TouchableOpacity key={index} onPress={() => handlePress(index)} style={styles.itemStyle}>
            <Text>
              {item}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    borderWidth: 3,
    padding: 5,
    width: "33%",
  }
})

export default Header