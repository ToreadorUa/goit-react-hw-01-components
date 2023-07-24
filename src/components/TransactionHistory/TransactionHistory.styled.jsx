import styled from 'styled-components';

export const Td = styled.td`
  padding: 5px 10px;
  text-align: center;
`;
export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f7f7f7;
  }
`;
export const TdName = styled(Td)`
  text-transform: capitalize;
`;
