import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'my_movies',
});

export const setLocalStorage = (key: string, value: any) => {
  try {
    storage.set(key, JSON.stringify(value));
  } catch (error) {
    console.error('Adding value from MMKV:', error);
  }
};
export const getLocalStorage = (key: string) => {
  try {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : '';
  } catch (error) {
    console.error('Getting value from MMKV:', error);
  }
};
export const clearLocalStorage = () => {
  try {
    storage.clearAll();
  } catch (error) {
    console.error('clearing MMKV:', error);
  }
};
