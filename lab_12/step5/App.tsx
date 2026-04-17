import React from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GridLayout, Card } from './src/components/GridLayout';
import {
  ResponsiveHeader,
  ResponsiveContainer,
} from './src/components/ResponsiveHeader';
import {
  AdaptiveLayout,
  FeatureCard,
  StatsRow,
  ResponsiveImage,
} from './src/components/AdaptiveLayout';

export default function App() {
  return (
    <SafeAreaProvider>
      <ResponsiveHeader
        title="Lab 12 - Responsive App"
        leftAction={{
          icon: '←',
          onPress: () => Alert.alert('Нажата левая кнопка'),
        }}
        rightAction={{
          icon: '☰',
          onPress: () => Alert.alert('Нажата правая кнопка'),
        }}
      />

      <ResponsiveContainer>
        <AdaptiveLayout
          content={
            <>
              <StatsRow
                stats={[
                  { label: 'Users', value: '120' },
                  { label: 'Sales', value: '85' },
                  { label: 'Views', value: '950' },
                ]}
              />

              <ResponsiveImage
                source={{ uri: 'responsive-demo-image' }}
              />

              <FeatureCard
                icon="📱"
                title="Mobile Layout"
                description="Интерфейс адаптируется под телефон."
                variant="primary"
              />

              <FeatureCard
                icon="💻"
                title="Tablet Layout"
                description="На планшете блоки становятся шире и удобнее."
                variant="secondary"
              />

              <FeatureCard
                icon="🛡️"
                title="Safe Area"
                description="Шапка учитывает вырезы экрана и safe area."
                variant="accent"
              />

              <View style={styles.sectionTitleWrap}>
                <Text style={styles.sectionTitle}>Grid Cards</Text>
              </View>

              <GridLayout columns={2} spacing={12}>
                <Card title="Card 1" subtitle="Первая карточка">
                  <Text>Контент карточки 1</Text>
                </Card>

                <Card title="Card 2" subtitle="Вторая карточка">
                  <Text>Контент карточки 2</Text>
                </Card>

                <Card title="Card 3" subtitle="Третья карточка">
                  <Text>Контент карточки 3</Text>
                </Card>

                <Card title="Card 4" subtitle="Четвертая карточка">
                  <Text>Контент карточки 4</Text>
                </Card>
              </GridLayout>
            </>
          }
          footer={
            <Text style={styles.footerText}>
              Footer: responsive design demo
            </Text>
          }
        />
      </ResponsiveContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionTitleWrap: {
    marginBottom: 12,
    marginTop: 4,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  footerText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 14,
  },
});