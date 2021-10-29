import React from "react";

class MenuLink extends React.Component {
    render() {
        return (
            <a href={this.props.url} className="menu-item" rel="noopener">
                <span className="left-bracket">[</span>
                <span>{this.props.name}</span>
                <span className="right-bracket">]</span>
            </a>
        );
    }
}

export default MenuLink;
