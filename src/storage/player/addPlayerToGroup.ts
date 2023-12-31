import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { getPlayersByGroup } from "./getPlayersByGroup";
import { AppError } from "@utils/AppError";

export async function addPlayerToGroup(playerName: string, groupId: string, team: string) {
  try {
    const newPlayer = {
      id: String(new Date().getTime()),
      name: playerName.trim(),
      team: team
    };

    console.log(newPlayer);

    if (!newPlayer.name) {
      throw new AppError('Missing player name');
    }

    const playersByGroup = await getPlayersByGroup(groupId);

    if (playersByGroup.length > 0) {
      const playerExists = playersByGroup.find((player: PlayerStorageDTO) => (player.name === newPlayer.name && player.team === newPlayer.team));

      if (playerExists) {
        throw new AppError('This team already has a player with this name');
      }

      await AsyncStorage.setItem(`${PLAYER_COLLECTION}:${groupId}`, JSON.stringify([...playersByGroup, newPlayer]));

      return newPlayer;
    }

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}:${groupId}`, JSON.stringify([newPlayer]));

    return newPlayer;
  } catch (err) {
    throw err;
  }
}