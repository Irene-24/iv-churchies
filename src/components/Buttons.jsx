import styled from 'styled-components';
import { orange, lightOrange } from "../colors";

const Button = styled.button`
    cursor:pointer;
    color:#fff;
    background:${props => props.light ? lightOrange : orange };  
    border:none;
    outline:none;
    padding: 10px;
    font-size:1.2rem; 
    transform: scale(1);
    transition:transform 0.1s linear;
    text-transform:uppercase;

    &:hover 
    {
        transform: scale(1.1);    
    }

`;

export default Button;