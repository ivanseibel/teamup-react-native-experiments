import { useState } from "react";
import { FlatList, View } from "react-native";

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

type Player = {
  id: string;
  name: string;
  team: string;
}

const PLAYERS: Player[] = [
  {
    id: '1',
    name: 'Player 1',
    team: 'Team A'
  },
  {
    id: '2',
    name: 'Player 2',
    team: 'Team B'
  },
  {
    id: '3',
    name: 'Player 3',
    team: 'Team A'
  },
  {
    id: '4',
    name: 'Player 4',
    team: 'Team B'
  },
 
  {
    id: '9',
    name: 'Player 9',
    team: 'Team A'
  },
  {
    id: '10',
    name: 'Player 10',
    team: 'Team B'
  },
  {
    id: '11',
    name: 'Player 11',
    team: 'Team A'
  },
  {
    id: '12',
    name: 'Player 12',
    team: 'Team B'
  },
  {
    id: '15',
    name: 'Player 15',
    team: 'Team A'
  },
  {
    id: '16',
    name: 'Player 16',
    team: 'Team B'
  },
  {
    id: '17',
    name: 'Player 17',
    team: 'Team A'
  },
  {
    id: '18',
    name: 'Player 18',
    team: 'Team B'
  },
  {
    id: '19',
    name: 'Player 19',
    team: 'Team A'
  },
  {
    id: '20',
    name: 'Player 20',
    team: 'Team B'
  },
  {
    id: '21',
    name: 'Player 21',
    team: 'Team A'
  },
  {
    id: '22',
    name: 'Player 22',
    team: 'Team B'
  },
  {
    id: '23',
    name: 'Player 23',
    team: 'Team A'
  },
  {
    id: '24',
    name: 'Player 24',
    team: 'Team B'
  },
  {
    id: '25',
    name: 'Player 25',
    team: 'Team A'
  },
  {
    id: '26',
    name: 'Player 26',
    team: 'Team B'
  },
  {
    id: '27',
    name: 'Player 27',
    team: 'Team A'
  },
  {
    id: '28',
    name: 'Player 28',
    team: 'Team B'
  },
  {
    id: '29',
    name: 'Player 29',
    team: 'Team A'
  },
  {
    id: '30',
    name: 'Player 30',
    team: 'Team B'
  },
  {
    id: '31',
    name: 'Player 31',
    team: 'Team A'
  },
  {
    id: '32',
    name: 'Player 32',
    team: 'Team B'
  },
  {
    id: '33',
    name: 'Player 33',
    team: 'Team A'
  },
  {
    id: '34',
    name: 'Player 34',
    team: 'Team B'
  },
  {
    id: '35',
    name: 'Player 35',
    team: 'Team A'
  },
  {
    id: '36',
    name: 'Player 36',
    team: 'Team B'
  },
  {
    id: '37',
    name: 'Player 37',
    team: 'Team A'
  },
  {
    id: '38',
    name: 'Player 38',
    team: 'Team B'
  },
];

export function Players() {
  const [team, setTeam] = useState<Teams>('Team A');
  const [players, setPlayers] = useState<Player[]>(PLAYERS);

  return (
    <Container>
      <Header 
        showBackButton
      />
      <Highlight 
        title="Group name"
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