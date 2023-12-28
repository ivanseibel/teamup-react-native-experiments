import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

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
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  line-height: 24px;
`;
