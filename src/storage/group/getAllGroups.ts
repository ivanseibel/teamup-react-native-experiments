import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { Group } from "./GroupStorageDTO";

export async function getAllGroups() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
  
    const groups: Group[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (err) {
    throw err;
  }
}