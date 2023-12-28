import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
`;

export const HeaderList = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 32px 0 12px;
  align-items: center;
`;

export const PlayersNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    line-height: 22px;
  `}
`;