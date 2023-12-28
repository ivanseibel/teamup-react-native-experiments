import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
  weight: 'fill'
}))``;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};

    line-height: 26px;
    flex: 1;
  `}
`; 