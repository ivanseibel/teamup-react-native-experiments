import { Container, Title } from "./styles";

type Props = {
  title: string;
}

export function EmptyList({title}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}