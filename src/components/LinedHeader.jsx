import styled from 'styled-components';
import { orange } from "../colors";

const LinedHeader = styled.p`
    font-family: Quicksand;
    font-style: normal;
    text-align: center;
    color: #000000;
    position:relative;
    padding: 5px 5px 10px;
    display:inline-block;

    &:after
    {
        content:"";
        position:absolute;
        width:${props => props.mini ? "70%" : "90%" };
        height:2px;
        background-color:${orange };
        left:${props => props.mini ? "50%" : "0" };
        bottom:5px;
        transform: ${props => props.mini ? "translateX( -50%)" : "0" }

    }
`;

export default LinedHeader;
