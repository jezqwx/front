import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { generateMockContacts } from '../utils/mockData';
import { Contact } from '../types';


const ITEM_HEIGHT = 80;

export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contact[]>(generateMockContacts(100));
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(({ item }: { item: Contact }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => Alert.alert('Selected', item.email)}
      activeOpacity={0.7}
    >
      <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
        <Text style={styles.avatarText}>{item.firstName[0]}{item.lastName[0]}</Text>
      </View>
      
    </TouchableOpacity>
  ), []);
}