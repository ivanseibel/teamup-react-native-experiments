import styled from 'styled-components/native';
import { ThemeType } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;
