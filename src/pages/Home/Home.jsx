import React from 'react';
import Main from "../../components/Main";
import Hero from "../../components/Hero";
import LinedHeader from "../../components/LinedHeader";
import Button from "../../components/Buttons";
import classes from "./Home.module.css";

function Home () 
{
    return (
        <>

            <Hero>

            </Hero>
            <Main>


                <LinedHeader>
                    the best news
                </LinedHeader>

                <p className={ classes.PreviewText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>


            </Main>
        </>
    );
}

export default Home;
