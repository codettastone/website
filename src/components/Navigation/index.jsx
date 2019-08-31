import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Icon } from 'semantic-ui-react'
import * as ROUTES from '../../utilities/routes'

function Navigation() {
  return (
    <Menu fixed="top" inverted>
      <Container text>
        <Menu.Item position="left">
          <Link to={ROUTES.LANDING}>
            <Icon name="gem outline" flipped="vertically" size="large" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={ROUTES.BART}>
            <Icon name="train" size="large" color="red" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a href="//app.codettastone.com" target="_blank" rel="noreferrer noopener">
            <Icon name="users" size="large" color="teal" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://codettastone.web.app/" target="_blank" rel="noreferrer noopener">
            <Icon name="users" size="large" color="pink" />
          </a>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navigation
