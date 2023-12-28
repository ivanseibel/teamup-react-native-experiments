import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

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
        <Button 
          label="Create"
          onPress={() => {}}
          variation="PRIMARY"
        />
      </Content>
    </Container>
  )
}