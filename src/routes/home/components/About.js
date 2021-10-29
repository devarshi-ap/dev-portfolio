/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MenuLink from "./MenuLink";
import { Link, withRouter } from "react-router-dom";


class About extends React.Component {
    render() {
        return (
            <div id="col-1">
                <div className="title-box">
                    <div id="title-greeting">Hello, my name is</div>
                    <div id="title-name">Dev Patel</div>
                    <div id="title-description">
                        I'm an aspiring Software Engineer, going into my first year of Computer Science at Ryerson University,
                        working towards my BSc (Hons). In pursuit of happiness and a summer developer internship in Toronto.
                    </div>
                    
                    <div id="menu">
                        <Link to="/projects" className="menu-item" rel="noopener">
                            <span className="left-bracket">[</span>
                            <span>Projects</span>
                            <span className="right-bracket">]</span>
                        </Link>

                        <MenuLink url="https://pranx.com/matrix-code-rain/" name="Resumé" />
                        <MenuLink url="https://cforsmart.medium.com" name="Blog" />
                        <MenuLink url="mailto:devarshi.ap@gmail.com?subject=FromWebsite&body=Description" name="Contact Me" />
                    </div>            
                </div>
            </div>
        );
    }
}

export default withRouter(About);