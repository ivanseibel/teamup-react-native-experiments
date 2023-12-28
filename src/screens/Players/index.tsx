import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, PlayersNumber } from "./styles";

type Teams = 'Team A' | 'Team B';

type Player = {
  id: string;
  name: string;
  team: string;
}

export function Players() {
  const [team, setTeam] = useState<Teams>('Team A');
  const [players, setPlayers] = useState<string[]>([]);

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

    </Container>
  )
}