import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state;
      return (
        <Menu className="Menu" color="orange" fixed="top" fluid widths={4}>
          <Menu.Item
            active={activeItem === 'home'}
            href="/home"
            name="home"
            onClick={this.handleItemClick}
          >
    Home
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'buttons'}
            href="/buttons"
            name="buttons"
            onClick={this.handleItemClick}
          >
    Buttons
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'images'}
            name="images"
            onClick={this.handleItemClick}
          >
    Cards
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'cards'}
            name="cards"
            onClick={this.handleItemClick}
          >
    Text
          </Menu.Item>
        </Menu>
      );
    }
}

export default MenuExampleBasic;