import React, { Component } from 'react';
import { MdAccountCircle } from 'react-icons/md';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <span>FACEBOOK</span>
        </div>
        <div className="header-right">
          <p>Meu Perfil</p>
          <span>
            <MdAccountCircle size="30px" />
          </span>
        </div>
      </div>
    )
  }
}

export default Header;