import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

export async function removeAllPlayersFromGroup(groupId: string) {
  try {
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}:${groupId}`);
  } catch (error) {
    throw error;
  }
}