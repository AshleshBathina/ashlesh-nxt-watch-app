import {withRouter} from 'react-router-dom'

import {
  VideoContainer,
  Thumbnail,
  DescContainer,
  Profile,
  Description,
  Title,
  ChannelName,
  ViewsDate,
  ViewsDate2,
} from './styledComponents'

const GamingVideoItem = props => {
  const {info, isDark} = props

  const {id, title, thumbnailUrl, viewCount} = info

  const onClickVideo = () => {
    const {history} = props

    history.push(`/videos/${id}`)
  }

  return (
    <VideoContainer onClick={onClickVideo}>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
      <DescContainer>
        <Description>
          <Title isDark={isDark}>{title}</Title>

          <ViewsDate isDark={isDark}>{viewCount} Watching Worldwide</ViewsDate>
        </Description>
      </DescContainer>
    </VideoContainer>
  )
}

export default withRouter(GamingVideoItem)
