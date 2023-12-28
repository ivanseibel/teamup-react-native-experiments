import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

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
    </Container>
  )
}