import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Text = styled.p`
  margin: 0 auto;
  width: 25%;
  padding: 20px;
  text-align: center;
  font-weight: 700;
  background-color: #fc02f9;
  border-radius: 3px;
  // border: 2px dotted #fc02f9;
  color: black;
`;
export const Title = styled.h2`
  display: block;
  // margin: 130px 0;
  text-align: center;
  font-size: 25px;
  color: #fc02f9;
`;
export const StyledLink = styled(Link)`
  // text-decoration: none;
  color: black;
  // font-size: 15px;
`;
