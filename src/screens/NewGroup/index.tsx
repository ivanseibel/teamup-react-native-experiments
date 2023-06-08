import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";
import { createGroup } from "@storage/group/createGroup";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [groupName, setGroupName] = useState<string>('');

  const navigation = useNavigation();

  async function handleCreate() {
    try {
      const newGroup = await createGroup(groupName);

      if (!newGroup) return;

      navigation.navigate('Players', { groupId: newGroup.id, groupName: newGroup.name });
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('New Group', err.message);
        return;
      }
      
      console.log(err);
      Alert.alert('New Group', 'There was an error creating the group.');
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
          onSubmitEditing={handleCreate}
          returnKeyType="done"
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