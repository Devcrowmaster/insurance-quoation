import React from 'react';
import styled from '@emotion/styled';


const containerHeader = styled.header`
  background-color : #26C6DA;
  padding : .8rem;
  font-weight: bold;
  color: #fff;
`;

const Header = ({title}) => {
  return ( 
    <header>
      <h1>{title}</h1>
    </header>
   );
}
 
export default Header;