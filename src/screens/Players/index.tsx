import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, PlayersNumber } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";
import { addPlayerToGroup } from "@storage/player/addPlayerToGroup";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { getPlayersByGroup } from "@storage/player/getPlayersByGroup";
import { removePlayerFromGroup } from "@storage/player/removePlayerFromGroup";

type Teams = 'Team A' | 'Team B';

type RouteParams = {
  groupName: string;
  groupId: string;
}

export function Players() {
  const [team, setTeam] = useState<Teams>('Team A');
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { groupName, groupId } = route.params as RouteParams;
  const playerNameTextInputRef = useRef<TextInput>(null);

  async function handleAddPlayerToGroup() {
    try {
      const player = await addPlayerToGroup(playerName, groupId, team);
      setPlayers([...players, player]);
      playerNameTextInputRef.current?.blur();
      setPlayerName('');
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert('Add new Player', err.message);
      }

      console.log(err);
      Alert.alert('Add new Player', 'An error has occurred while trying to add the new Player.');
    }
  }

  async function handleRemovePlayerFromGroup(playerId: string) {
    try {
      await removePlayerFromGroup(playerId, groupId);
      // setPlayers(players.filter((player) => player.id !== playerId));
      loadPlayers();
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert('Remove Player', err.message);
      }

      console.log(err);
      Alert.alert('Remove Player', 'An error has occurred while trying to remove the Player.');
    }
  }

  async function loadPlayers() {
    try {
      const players = await getPlayersByGroup(groupId);
      setPlayers(players);
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert('Players', err.message);
      }

      console.log(err);
      Alert.alert('Players', 'An error has occurred while trying to load the players.');
    }
  }

  useEffect(() => {
    loadPlayers();
  }, [team, groupId]);

  return (
    <Container>
      <Header 
        showBackButton
      />
      <Highlight 
        title={groupName}
        subtitle="Add your friends and create the teams"
      />

      <Form>
        <Input 
          placeholder="Type the player name"
          autoCorrect={false}
          autoCapitalize="none"
          value={playerName}
          onChangeText={setPlayerName}
          inputRef={playerNameTextInputRef}
          onSubmitEditing={handleAddPlayerToGroup}
          returnKeyType="done"
        />
        <IconButton 
          variant="primary"
          icon="add"
          onPress={handleAddPlayerToGroup}
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={['Team A', 'Team B']}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <Filter 
              title={item}
              onPress={() => setTeam(item as Teams)}
              isActive={item === team}
            />
          )}
        />
        <PlayersNumber>
          {players.length}
        </PlayersNumber>
      </HeaderList>

      <FlatList 
        data={players.filter((player) => player.team === team)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={() => (
          <EmptyList 
            title="Add players to this team"
          />
        )}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => handleRemovePlayerFromGroup(item.id)}
          />
        )}
      />

      <Button 
        label="Delete Group"
        variation="SECONDARY"
      />

    </Container>
  )
}