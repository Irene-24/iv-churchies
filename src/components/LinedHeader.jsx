import styled from 'styled-components';
const LinedHeader = styled.p`
    font-family: Quicksand;
    font-style: normal;
    text-align: center;
    color: #000;
    position:relative;
    padding: 5px 5px 10px;
    display:inline-block;
    text-transform:uppercase;
    font-size:1.5rem;

    &:after
    {
        content:"";
        position:absolute;
        width:${props => props.mini ? "45%" : "90%" };
        height:2px;
        background-color:var(--orange);
        left:${props => props.mini ? "0" : "50%" };
        bottom:5px;
        transform: ${props => props.mini ? "0" : "translateX( -50%)" }

    }
`;

export default LinedHeader;
