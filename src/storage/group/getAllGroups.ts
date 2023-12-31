import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { Group } from "./createGroup";

export async function getAllGroups() {
  try {
    const groups = await AsyncStorage.getItem(GROUP_COLLECTION);
  
    if (groups) {
      return JSON.parse(groups) as Group[];
    }
  
    return [];
  } catch (err) {
    throw err;
  }
}