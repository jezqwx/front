import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props =
  | NativeStackScreenProps<RootStackParamList, 'Profile'>
  | NativeStackScreenProps<RootStackParamList, 'ProfileMain'>;

export default function ProfileScreen({ navigation, route }: Props) {
  const userId =
    'params' in route && route.params && 'userId' in route.params
      ? route.params.userId
      : '123';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile Screen</Text>
        <Text style={styles.text}>User ID: {userId}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: '#333' },
  text: { fontSize: 18, color: '#666', marginBottom: 20 },
  button: {
    backgroundColor: '#0066cc',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});