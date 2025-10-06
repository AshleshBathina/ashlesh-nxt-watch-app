import {Link} from 'react-router-dom'

import {
  Item,
  ItemContentButton,
  IconContainer,
  ItemName,
} from './styledComponents'

import SystemThemeContext from '../../context/systemThemeContext'

const SidebarItem = props => {
  const {info, isActive} = props
  const {name, icon, path} = info

  return (
    <SystemThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Item isDark={isDark} isActive={isActive}>
            <Link
              to={path}
              style={{textDecoration: 'none', width: '100%', height: '100%'}}
            >
              <ItemContentButton>
                <IconContainer isDark={isDark} isActive={isActive}>
                  {icon}
                </IconContainer>
                <ItemName isDark={isDark} isActive={isActive}>
                  {name}
                </ItemName>
              </ItemContentButton>
            </Link>
          </Item>
        )
      }}
    </SystemThemeContext.Consumer>
  )
}

export default SidebarItem
