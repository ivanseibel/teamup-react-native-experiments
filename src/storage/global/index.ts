import AsyncStorage from "@react-native-async-storage/async-storage";

export async function resetStorage() {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    throw err;
  }
}