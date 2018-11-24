import React from 'react';
import Media from 'react-media';
import Nav from './Nav'
import { push as Menu } from 'react-burger-menu'

import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';


class SlideMenu extends React.Component {
  _closeMenu() {
    this.props._closeMenu();
  }
  render() {
    return (
      <div>
        <Media query="(max-width: 479px)">
          <Menu customBurgerIcon={<img src={menuIcon} />} customCrossIcon={<img src={closeIcon} />} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right isOpen={this.props.menuOpen}>
            <Nav _closeMenu={() => this._closeMenu()} />
          </Menu>
        </Media>
        <Media query="(min-width: 480px)">
          <nav>
            <Nav isDesktop />
          </nav>
        </Media>
      </div>
    );
  }
}

export default SlideMenu;