import { View, Text, StyleSheet} from "react-native"


const Tiempo = ({tiempo}) => {
  const formatearTiempo = `${Math.floor(tiempo / 60).toString().padStart(2, "0")}:${(tiempo % 60).toString().padStart(2, "0")
}`

  return (
    <View style={styles.container}>
      <Text style={styles.time} >{formatearTiempo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
    flex: 0.3,
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
  }
})

export default Tiempo