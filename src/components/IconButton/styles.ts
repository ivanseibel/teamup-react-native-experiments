import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type IconButtonVariants = 'primary' | 'secondary';

type IconButtonProps = {
  variant: IconButtonVariants;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<IconButtonProps>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;