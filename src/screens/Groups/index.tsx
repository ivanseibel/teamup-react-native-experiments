import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";

import { Container } from "./styles";

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
        ListEmptyComponent={() => <EmptyList title="How about creating your first group?" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          groups.length === 0 && { flex: 1 }
        ]}
        renderItem={({ item }) => (
          <GroupCard 
            title={item.title}
          />
        )}
      />
      <Button
        label="Create Group"
        variation="PRIMARY"
        onPress={() => {Alert.alert('Create Group')}}
      />
    </Container>
  );
}