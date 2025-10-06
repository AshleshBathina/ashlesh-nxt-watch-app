import React from 'react'

const SystemThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  updateSavedVideos: () => {},
  likedVideos: [],
  updateLikedVideos: () => {},
  dislikedVideos: [],
  updateDislikedVideos: () => {},
})

export default SystemThemeContext
