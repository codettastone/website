import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import icon from '../../components/codettastone-icon.png'
import * as ROUTES from '../../utilities/routes'

function Navigation() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <Link to={ROUTES.LANDING}>
            <Icon name="gem" size="large" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={ROUTES.BART}>
            <Icon name="train" size="large" />
          </Link>
        </Menu.Item>
        <Menu.Item position="right">
          <a href="//app.codettastone.com" target="_blank" rel="noreferrer noopener">
            <Icon name="users" size="large" />
          </a>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navigation
