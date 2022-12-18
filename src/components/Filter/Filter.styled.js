import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const FilterInput = styled.input`
  font-size: ${theme.typography.text};
  padding: ${theme.space.secondary}px;
  color: ${theme.colors.text};
  margin-left: ${theme.space.secondary * 2}px;
  font-style: italic;
`;
