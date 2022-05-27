import styled from '@emotion/styled';
export const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  text-align: center;
`;
export const UserName = styled.p`
  color: #fc02f9;
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.537);
  margin: 0;
`;
export const Button = styled.button`
  padding: 10px;

  background-color: #fc02f9;
  border-radius: 3px;
  // color: rgba(255, 255, 255, 0.737);
  color: black;
  font-weight: 700;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.7;
  }
`;
