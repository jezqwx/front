# Lab 13.1 — Stack Navigation
## Что сделано
- Подключен `NavigationContainer`
- Настроен `createNativeStackNavigator`
- Созданы экраны:
  - Home
  - Profile
  - Settings
- Добавлена передача route parameters (`userId`)
- Настроен navigation header

## Структура
- `App.tsx` — настройка stack navigation
- `src/navigation/types.ts` — TypeScript-типы навигации
- `src/screens/HomeScreen.tsx`
- `src/screens/ProfileScreen.tsx`
- `src/screens/SettingsScreen.tsx`

## Как запустить
```bash
npm install
npx expo start