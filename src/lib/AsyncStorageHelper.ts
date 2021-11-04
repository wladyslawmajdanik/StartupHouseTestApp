import AsyncStorage from '@react-native-community/async-storage';

export async function getFromAsyncStorage(id: string): Promise<string> {
  const item = await AsyncStorage.getItem(id);
  return parseKey(item);
}

export async function saveToAsyncStorage(id: string, text: string): Promise<void> {
  await AsyncStorage.setItem(id, JSON.stringify(text));
}

function parseKey(key: string | null): string {
  if (key) {
    try {
      return JSON.parse(key);
    } catch (e) {
      return '';
    }
  } else {
    return '';
  }
}
