import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

type Group = {
  id: string;
  name: string;
}

export function NewGroup() {
  const [groupName, setGroupName] = useState<string>('');

  const navigation = useNavigation();

  function handleCreate() {
    const id = new Date().getTime().toString();
    navigation.navigate('Players', { groupId: id, groupName: groupName });
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