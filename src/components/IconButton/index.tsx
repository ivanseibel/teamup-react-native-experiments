import { TouchableOpacityProps } from "react-native";
import { Container, Icon, IconButtonVariants } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: IconButtonVariants
}

export function IconButton({ variant = 'primary', icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon
        name={icon} 
        variant={variant}
      />
    </Container>
  )
}