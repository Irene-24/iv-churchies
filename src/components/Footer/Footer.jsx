import React from 'react';
import Flexbox from "../Flexbox";
import FooterList from "./FooterList";
import classes from "./Footer.module.css";

const footerLinks =
    [
        {
            header: "visit",
            links:
                [
                    {
                        route: "/locations",
                        text: "Locations"
                    },
                    {
                        route: "/pastors",
                        text: "Our Pastors"
                    },
                    {
                        route: "/churches",
                        text: "Our Churches"
                    },
                    {
                        route: "/stories",
                        text: "Stories"
                    }
                ]
        },
        {

            header: "connect",
            links:
                [
                    {
                        route: "/small-groups",
                        text: "Small Groups"
                    },
                    {
                        route: "/minitries",
                        text: "Minitries"
                    },
                    {
                        route: "/explore",
                        text: "Explore"
                    },
                    {
                        route: "/services",
                        text: "Services"
                    }
                ]
        },
        {
            header: "grow",
            links:
                [
                    {
                        route: "/sermons",
                        text: "Sermon"
                    },
                    {
                        route: "/sunday-school",
                        text: "Sunday School"
                    },
                    {
                        route: "/meetings",
                        text: "Meetings"
                    },
                    {
                        route: "/quizzes",
                        text: "Quizzes"
                    }
                ]
        }
    ];

function Footer ()
{
    return (
        <footer className={ classes.Footer }>

            <h3>iV-churchies</h3>
            <div className={ classes.Line }></div>

            <Flexbox as="nav" justify="space-evenly">
                {

                    footerLinks.map( section => <FooterList key={ section.header } header={ section.header } links={ section.links } /> )

                }

            </Flexbox>

            <p className={ classes.CopyRight }>
                &copy; COPYRIGHT IV-TECHIES { new Date().getFullYear() }
            </p>

        </footer>
    );
}

export default Footer;
