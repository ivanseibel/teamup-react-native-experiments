import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export type ButtonVariation = 'PRIMARY' | 'SECONDARY';

type ContainerProps = TouchableOpacityProps & {
  variation?: ButtonVariation;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme, variation }) => variation === 'SECONDARY' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_700};

  min-height: 56px;
  max-height: 56px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  line-height: 24px;
`;
