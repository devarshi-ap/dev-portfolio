/* eslint-disable jsx-a11y/anchor-is-valid */
import $ from 'jquery';
import React from 'react';
import { Link, withRouter } from "react-router-dom";


class OptionsBar extends React.Component {
    constructor(props) {
        super(props);
        this.generateImagePath = this.generateImagePath.bind(this);
        this.state = {
            imagePath: 'url("https://i.imgur.com/Qtk81L9.jpeg")',
        }
    }

    toggleEye() {
        $(".profile-container").fadeToggle(200);
    }

    changeBg() {
        let newImgPath = this.generateImagePath();
        // RE-RENDERS COMPONENT
        this.setState({
            imagePath: newImgPath,
        })
        $(".left-column").fadeOut(70).css("backgroundImage", this.state.imagePath).fadeIn(100);
    }

    generateImagePath() {
        const arr =  ["url('https://i.imgur.com/RxmCIOP.jpeg')",
                    "url('https://i.imgur.com/1DpVtI9.jpeg')",
                    "url('https://i.imgur.com/B58JNBx.jpeg')"
                ];
        
        return arr[Math.floor(Math.random()*arr.length)];
    }
    
    render() {
        return(
            <div className="bg-options-bar">
                <Link to="/" className="fas fa-home" style={{color: 'inherit'}}/>
                <i className="fas fa-random" onClick={this.changeBg.bind(this)} />
                <i className="far fa-eye" id="view-bg" onClick={this.toggleEye.bind(this)} />
            </div>
        );
    }
}

export default withRouter(OptionsBar);