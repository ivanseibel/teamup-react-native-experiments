import { IconButton } from "@components/IconButton";
import { Container, Icon, Name } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon 
        name="person"
      />
      <Name>{name}</Name>
      <IconButton 
        variant="secondary"
        icon="delete"
        onPress={onRemove}
      />
    </Container>
  )
}