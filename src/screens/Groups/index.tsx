import { useCallback, useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";

import { Container } from "./styles";
import { Group } from "@storage/group/createGroup";
import { getAllGroups } from "@storage/group/getAllGroups";
import { Loading } from "@components/Loading";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);

  const navigation = useNavigation();

  function handleOpenNewGroup() {
    navigation.navigate('NewGroup');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const groups = await getAllGroups();
      setGroups(groups);
    } catch (err) {
      Alert.alert('Error', 'Ooops, something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight 
        title="Groups"
        subtitle="Play with your friends"
      />

      { isLoading ? (<Loading />) : (
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
              title={item.name}
              onPress={() => navigation.navigate('Players', { groupId: item.id, groupName: item.name })}
            />
          )}
        />
      )}
      
      <Button
        label="Create Group"
        variation="PRIMARY"
        onPress={handleOpenNewGroup}
      />
    </Container>
  );
}