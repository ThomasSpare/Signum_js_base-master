import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Button } from 'react-native';
import React, { useRef, useState } from 'react';
import { analyzeAudio, scale, sample } from 'react-native-audio-analyzer';
import ReactNativeBlobUtil from 'react-native-blob-util';



export default function App() {
  const [result, setResult] = useState([]);

  const start = useCallback(async () => {
    try {
      const response = await ReactNativeBlobUtil.config({
        fileCache: true,
      }).fetch(
        'GET',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        {}
      );
      const path = response.path();
      const data = await analyzeAudio(path);
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Audio Visualizer</Text>
        </View>
      <Text style={styles.text}>SIGNUM</Text>
      <StatusBar style="auto" />
    <View style={styles.container}>
      <Button title="Start" onPress={start} />
      <ScrollView horizontal style={styles.scroll}>
        <View style={styles.row}>
          {result.length > 0 &&
            scale(result.map((_) => _.amplitude)).map((value, index) => (
              <View
              key={index}
              style={[styles.item, { height: value * 100 }]}
              />
              ))}
        </View>
      </ScrollView>
      <ScrollView horizontal style={styles.scroll}>
        <View style={styles.row}>
          {result.length > 0 &&
            scale(
              sample(
                result.map((_) => _.amplitude),
                20
                )
                ).map((value, index) => (
                  <View
                  key={index}
                  style={[styles.item, { height: value * 100 }]}
              />
            ))}
        </View>
      </ScrollView>
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    maxHeight: 200,
  },
  item: {
    width: 3,
    backgroundColor: 'blue',
    marginHorizontal: 2,
  },
});

