import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import SystemThemeContext from './context/systemThemeContext'

class App extends Component {
  state = {isDark: false, savedVideos: [], likedVideos: [], dislikedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  updateLikedVideos = id => {
    this.setState(prevState => {
      const updatedDislikes = prevState.dislikedVideos.filter(
        videoId => videoId !== id,
      )

      if (prevState.likedVideos.includes(id)) {
        const updatedLikes = prevState.likedVideos.filter(
          videoId => videoId !== id,
        )
        return {likedVideos: updatedLikes, dislikedVideos: updatedDislikes}
      }
      const updatedLikes = [...prevState.likedVideos, id]
      return {likedVideos: updatedLikes, dislikedVideos: updatedDislikes}
    })
  }

  updateDislikedVideos = id => {
    this.setState(prevState => {
      const updatedLikes = prevState.likedVideos.filter(
        videoId => videoId !== id,
      )

      if (prevState.dislikedVideos.includes(id)) {
        const updatedDislikes = prevState.dislikedVideos.filter(
          videoId => videoId !== id,
        )
        return {likedVideos: updatedLikes, dislikedVideos: updatedDislikes}
      }
      const updatedDislikes = [...prevState.dislikedVideos, id]
      return {likedVideos: updatedLikes, dislikedVideos: updatedDislikes}
    })
  }

  updateSavedVideos = details => {
    this.setState(prevState => {
      const videoId = details.id
      const index = prevState.savedVideos.findIndex(obj => videoId === obj.id)
      if (index !== -1) {
        const updateSavedVideos = prevState.savedVideos.filter(
          obj => videoId !== obj.id,
        )
        return {savedVideos: updateSavedVideos}
      }

      return {savedVideos: [...prevState.savedVideos, details]}
    })
  }

  render() {
    const {isDark, savedVideos, likedVideos, dislikedVideos} = this.state

    return (
      <SystemThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          savedVideos,
          updateSavedVideos: this.updateSavedVideos,
          likedVideos,
          updateLikedVideos: this.updateLikedVideos,
          dislikedVideos,
          updateDislikedVideos: this.updateDislikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SystemThemeContext.Provider>
    )
  }
}

export default App
