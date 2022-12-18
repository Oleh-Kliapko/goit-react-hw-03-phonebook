import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const WrapperPhonebook = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: ${theme.space.main * 2}px;
`;

export const WrapperContacts = styled.ul`
  margin: 0;
  padding: 0;
`;
