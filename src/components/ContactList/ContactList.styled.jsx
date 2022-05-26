import styled from '@emotion/styled';
export const ContactListEl = styled.ul`
  margin: 10px auto 0;
  padding: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  border-radius: 5px;
  background-color: black;
`;
export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
