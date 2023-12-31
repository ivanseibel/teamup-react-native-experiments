import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllGroups } from "./getAllGroups";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { removeAllPlayersFromGroup } from "@storage/player/removeAllPlayersFromGroup";

export async function removeGroup(groupId: string) {
  try {
    const groups = await getAllGroups();

    const newGroups = groups.filter((group) => group.id !== groupId);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));

    removeAllPlayersFromGroup(groupId);
  } catch (error) {
    
  }
}