import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

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

const VideoItem = props => {
  const {info, isDark} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = info
  const {name, profileImageUrl} = channel
  const resultTime = formatDistanceToNow(new Date(publishedAt))
  const agoTime = `${resultTime.replace(/^(over |almost |about)/, '')} ago`

  return (
    <VideoContainer>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <DescContainer>
          <Profile src={profileImageUrl} alt="channel logo" />
          <Description>
            <Title isDark={isDark}>{title}</Title>
            <ChannelName isDark={isDark}>{name}</ChannelName>
            <ViewsDate isDark={isDark}>
              {viewCount} views • {agoTime}
            </ViewsDate>
          </Description>
        </DescContainer>
      </Link>
    </VideoContainer>
  )
}

export default VideoItem
