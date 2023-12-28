import { Touchable, TouchableOpacityProps } from "react-native";
import { ButtonVariation, Container, Label } from "./styles";

type Props = TouchableOpacityProps & {
  label: string;
  variation?: ButtonVariation;
}

export function Button ({ label, variation = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      variation={variation}
      {...rest}
    >
      <Label>
        {label}
      </Label>
    </Container>
  )
}