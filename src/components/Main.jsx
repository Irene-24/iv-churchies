import styled from 'styled-components';
import { grey } from "../colors";

const Main = styled.main`
   
    background:${grey };  
    min-height:50vh;
    padding: 10px 20px;
    text-align:center;

    @media screen and (min-width:768px)
    {
        padding: 10px 40px;
    }
   

`;

export default Main;