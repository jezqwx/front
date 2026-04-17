import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile App</Text>
          <Text style={styles.headerSubtitle}>Lab 11.1 - React Native Fundamentals</Text>
        </View>

        <ProfileCard
          name="Bekzat Ubniyev"
          role="Frontend Developer"
          avatar="https://via.placeholder.com/100"
          bio="I am learning React Native and building my first mobile UI with Expo, TypeScript, StyleSheet, and Flexbox."
        />

        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  scrollContent: {
    paddingVertical: 16,
    paddingBottom: 32,
  },
  header: {
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});