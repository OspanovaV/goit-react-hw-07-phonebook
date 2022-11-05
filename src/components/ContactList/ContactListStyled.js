import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 360px;
`;
export const Item = styled.li`
  display: flex;
  margin-left: 20px; 
  justify-content: space-between;
  font-size: 15px;
  &:not(:last-child) {
    margin-bottom: 10px;
  } 
  &:before {
    content: "";
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
    position: absolute;
    margin-left: -10px;
    margin-top: 6px;
}
`;

export const Button = styled.button`
  margin-left: 20px;  
  font-size: 10px;
`;