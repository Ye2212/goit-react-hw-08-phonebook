import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 60px;
  padding: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  // background-color: black;
  // box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 1),
  // 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Label = styled.label`
  margin: 0 10px 5px;
  font-size: 12px;
`;
export const Text = styled.span`
  font-weight: 600;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.737);
`;

export const Input = styled.input`
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
  }`;

export const AddContactBtn = styled.button`
  padding: 10px;
  margin-top: 15px;
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
