import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function removePlayerFromGroup(playerId: string, groupId: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}:${groupId}`);

    if (storage) {
      const parsedStorage = JSON.parse(storage);

      const newStorage = parsedStorage.filter((player: PlayerStorageDTO) => player.id !== playerId);

      await AsyncStorage.setItem(`${PLAYER_COLLECTION}:${groupId}`, JSON.stringify(newStorage));
    }
  } catch (err) {
    throw err; 
  }
}