import { useState } from "react";
import { FlatList, View } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, PlayersNumber } from "./styles";
import { PlayerCard } from "@components/PlayerCard";

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
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => {}}
          />
        )}
      />

    </Container>
  )
}