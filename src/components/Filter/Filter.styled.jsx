import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  font-size: 12px;
  display: block;
  margin: 0 auto;
`;

export const FilterText = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.737);
`;
export const FilterInput = styled.input`
  margin-bottom: 50px;
  display: block;
  width: 250px;
  height: 25px;
  color: inherit;
  font-weight: 700;
  background-color: transparent;
  padding: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  font-size: 20px;
  border: 1px solid #fc02f9;
  border-radius: 3px;
  // border-bottom: 1px solid #fc02f9;
  font: inherit;
  font-size: inherit;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
  }
`;
