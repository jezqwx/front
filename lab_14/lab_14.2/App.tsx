import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RegistrationScreen from './src/screens/RegistrationScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </>
  );
}