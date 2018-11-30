import React from 'react';
import Media from 'react-media';
import Nav from './Nav'
import { push as Menu } from 'react-burger-menu'

import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';


class SlideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false
    };
  }


  _closeMenu() {
    this.props._closeMenu();
  }

  _switchMenuOnScroll = () => {
    const scrollPosition = document.getElementById('page-wrap').scrollTop;
        
    if (scrollPosition > 50) {
      this.setState({
        hasScrolled: true
      });
    } else {
      this.setState({
        hasScrolled: false
      });
    }
  }

  componentDidMount() {
    document.getElementById('page-wrap').addEventListener('scroll', this._switchMenuOnScroll);
  }

  render() {
    const { hasScrolled } = this.state;
    return (
      <div>
        <Media query="(max-width: 479px)">
          <Menu customBurgerIcon={<img src={menuIcon} alt="Menu" />} customCrossIcon={<img src={closeIcon} alt="Close" />} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right isOpen={this.props.menuOpen}>
            <Nav _closeMenu={() => this._closeMenu()} />
          </Menu>
        </Media>
        <Media query="(min-width: 480px)">
          {!hasScrolled && <nav>
            <Nav isDesktop />
          </nav>}
        </Media>

        {hasScrolled && <Media query="(min-width: 480px)">
          <Menu customBurgerIcon={<img src={menuIcon} alt="Menu" />} customCrossIcon={<img src={closeIcon} alt="Close" />} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right isOpen={this.props.menuOpen}>
            <Nav _closeMenu={() => this._closeMenu()} />
          </Menu>
        </Media>}

      </div>
    );
  }
}

export default SlideMenu;