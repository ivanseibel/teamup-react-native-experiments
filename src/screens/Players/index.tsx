import { useState } from "react";
import { FlatList } from "react-native";
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

type Teams = 'Team A' | 'Team B';

type RouteParams = {
  groupName: string;
  groupId: string;
}

export function Players() {
  const [team, setTeam] = useState<Teams>('Team A');
  const [players, setPlayers] = useState<Player[]>(PLAYERS);

  const route = useRoute();
  const { groupName } = route.params as RouteParams;

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
        />
        <IconButton 
          variant="primary"
          icon="add"
          onPress={() => {}}
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
            onRemove={() => {}}
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