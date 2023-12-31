import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";
import { createGroup } from "@storage/group/createGroup";
import { Alert } from "react-native";

export function NewGroup() {
  const [groupName, setGroupName] = useState<string>('');

  const navigation = useNavigation();

  async function handleCreate() {
    try {
      const id = await createGroup(groupName);

      if (!id) return;

      navigation.navigate('Players', { groupId: id, groupName: groupName });
    } catch (err) {
      console.log(err);
      Alert.alert('Error', 'Ooops, something went wrong.');
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight 
          title="New Group"
          subtitle="Create a new group to add your friends"
        />

        <Input 
          placeholder="Group name"
          style={{ marginBottom: 20 }}
          value={groupName}
          onChangeText={setGroupName}
        />

        <Button 
          label="Create"
          onPress={handleCreate}
          variation="PRIMARY"
        />
      </Content>
    </Container>
  )
}