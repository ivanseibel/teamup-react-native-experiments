import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();

  function handleCreate() {
    navigation.navigate('Players', { groupId: '1' });
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