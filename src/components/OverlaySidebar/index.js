import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import SystemThemeContext from '../../context/systemThemeContext'

import SidebarItem from '../SidebarItem'

import {SidebarContainer} from './styledComponents'

const optionsList = [
  {id: 'home', name: 'Home', path: '/', icon: <AiFillHome size={25} />},
  {
    id: 'trending',
    name: 'Trending',
    path: '/trending',
    icon: <FaFire size={25} />,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    path: '/gaming',
    icon: <SiYoutubegaming size={25} />,
  },
  {
    id: 'savedVideos',
    name: 'Saved Videos',
    path: '/saved-videos',
    icon: <MdPlaylistAdd size={25} />,
  },
]

class Sidebar extends Component {
  render() {
    const {location} = this.props
    const {pathname} = location

    return (
      <SystemThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const changeActiveItem = id => {
            const obj = optionsList.find(option => option.id === id)
            this.setState({activeRouteId: id})
          }

          return (
            <SidebarContainer isDark={isDark}>
              {optionsList.map(option => (
                <SidebarItem
                  key={option.id}
                  info={option}
                  isActive={option.path === pathname}
                  changeActiveItem={changeActiveItem}
                />
              ))}
            </SidebarContainer>
          )
        }}
      </SystemThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
