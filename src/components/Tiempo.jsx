import { View, Text, StyleSheet} from "react-native"


const Tiempo = ({tiempo}) => {
  return (
    <View style={styles.container}>
      <Text>{tiempo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
  }
})

export default Tiempo