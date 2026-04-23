import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ContactsScreen from './src/screens/ContactsScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ContactsScreen />
    </>
  );
}