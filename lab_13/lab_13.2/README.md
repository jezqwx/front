# Lab 13.2 — Bottom Tab Navigation
## Что сделано
- Создан `Tab.Navigator`
- Добавлены вкладки:
  - Home
  - Search
  - Notifications
  - Profile
- Подключены иконки через `@expo/vector-icons`
- Добавлен badge для Notifications
- Использована комбинация `Tab Navigator + Stack Navigator`

## Структура
- `App.tsx` — точка входа
- `src/navigation/AppNavigator.tsx` — основная навигация
- `src/navigation/types.ts` — типы навигации
- `src/screens/HomeScreen.tsx`
- `src/screens/SearchScreen.tsx`
- `src/screens/NotificationsScreen.tsx`
- `src/screens/ProfileScreen.tsx`
- `src/screens/SettingsScreen.tsx`

## Как запустить
```bash
npm install
npx expo start