import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import { WebView } from 'react-native-webview';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      </View>
        <WebView style={styles.webview}
        originWhitelist={['*']}
        source={{ uri: 'https://asset.cloudinary.com/djunroohl/dea0d1d4da595faa6c1492e1639b3589' }}
        ></WebView>
      <Text style={styles.text}>SIGNUM</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderColor: 'cyan',
    borderWidth: 2,
    borderRadius: 50,
  },
  text: {
    color: 'cyan',
    width: 100,
    marginTop: 290,
    marginLeft: 320,
    fontStyle: 'italic',
    transform: [{ rotate: '90deg' }],
  },
  webview: {
    flex: 1,
    border: 'blue',
    borderWidth: 5,
    borderRadius: 15,
    transform: [{ rotate: '90deg' }],
  }

});
