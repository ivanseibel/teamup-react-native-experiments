import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
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
          onPress={() => {}}
          variation="PRIMARY"
        />
      </Content>
    </Container>
  )
}