import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

type Group = {
  id: string;
  title: string;
}

const INITIAL_GROUPS = [
  {
    id: '1',
    title: 'Sunday Football'
  },
  {
    id: '2',
    title: 'Saturday Football'
  },
  {
    id: '3',
    title: 'Friday Football'
  },
  {
    id: '4',
    title: 'Thursday Football'
  },
  {
    id: '5',
    title: 'Wednesday Football'
  },
  {
    id: '6',
    title: 'Tuesday Football'
  },
  {
    id: '7',
    title: 'Monday Football'
  },
];

export function Groups() {
  const [groups, setGroups] = useState<Group[]>(INITIAL_GROUPS);

  return (
    <Container>
      <Header />
      <Highlight 
        title="Groups"
        subtitle="Play with your friends"
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GroupCard 
            title={item.title}
          />
        )}
      />
    </Container>
  );
}