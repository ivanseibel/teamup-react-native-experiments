import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
}

export function Highlight(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  )
}