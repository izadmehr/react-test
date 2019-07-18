import styled from 'styled-components';

import { colors } from '../../utils/theme';

export const ShowContainer = styled.div``;

export const CarHeader = styled.div`
  background-color: ${colors.lightGray};
  height: 300px;
`;

export const Row = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
`;
export const ShowContent = styled.div`
  width: 65%;
`;
export const CarTitle = styled.h1`
  color: ${colors.darkGray};
  font-size: 32px;
  font-weight: bold;
`;
export const CarModel = styled.p`
  color: ${colors.darkGray};
  font-size: 18px;
  margin: 0;
`;
export const CarDescription = styled.p`
  color: ${colors.darkGray};
  font-size: 14px;
`;
