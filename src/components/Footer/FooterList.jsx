import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Anchors = styled( Link )`
    display:block;
    color:#fff;
    margin: 20px 20px  20px 0;
    font-size:1.02rem;
    
    `;

const Header = styled.p`
    font-size:1.2rem;
    font-weight:bold;
    color:#fff

`;


function FooterList ( { header, links } )
{

    return (
        <section style={ { padding: "20px" } } >
            <Header>{ header.toUpperCase() }</Header>

            <ul>
                {
                    links.map( link => <Anchors key={ link.route } to={ link.route }> { link.text } </Anchors> )
                }
            </ul>

        </section>
    );
}

export default FooterList;
