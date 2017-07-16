import React from 'react';
import { Link } from 'react-router';

export default class GlobalHeader extends React.Component {
  render () {
    return (
      <div className="header">
        <h1 className="header__title">
          <Link to="/">SPA Note</Link>
        </h1>
        <div className="header__menu">
          <span className="header__user">
            <img src="/assets/user.svg" width="16" height="16" />
            <span>MyUserName</span>
          </span>
        </div>
      </div>
    );
  }
}