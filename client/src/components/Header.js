import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Header extends Component {
    renderLoginLogoutButton() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href='/auth/google'>Login with Google</a></li>
                );
            default:
                return (
                    [
                    <li key="paymentContainer" ><Payment/></li>,
                    <li key="credits" style={{margin: '0 0 0 15px' }}>Credits: {this.props.auth.credits}</li>,
                    <li key="logoutBtnContainer"><a href='/api/logout'>Logout</a></li>
                ]
                );
        }
    }

    render() {
        console.log("AUTH:", this.props.auth);

        return (
        <nav>
            <div className="nav-wrapper">
                <Link 
                    className="left brand-logo" 
                    to={this.props.auth ? '/surveys' : '/'}
                >
                VLT44
                </Link>
                <ul className="right">
                    {this.renderLoginLogoutButton()}
                </ul>
            </div>
        </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);