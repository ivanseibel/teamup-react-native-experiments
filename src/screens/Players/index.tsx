import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";

export function Players() {
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
    </Container>
  )
}