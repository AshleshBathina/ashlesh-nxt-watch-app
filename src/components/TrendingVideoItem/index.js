import {formatDistanceToNow} from 'date-fns'

import {
  SLink,
  VideoContainer1,
  Thumbnail1,
  DescContainer1,
  Description1,
  Profile,
  Title1,
  ChannelName1,
  ViewsDate1,
  ViewsDate2,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {info, isDark} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = info
  const {name, profileImageUrl} = channel
  const resultTime = formatDistanceToNow(new Date(publishedAt))
  const agoTime = `${resultTime.replace(/^(over |almost |about)/, '')} ago`

  return (
    <VideoContainer1>
      <SLink to={`/videos/${id}`}>
        <Thumbnail1 src={thumbnailUrl} alt="video thumbnail" />
        <DescContainer1>
          <Profile src={profileImageUrl} />
          <Description1>
            <Title1 isDark={isDark}>{title}</Title1>
            <ChannelName1 isDark={isDark}>{name}</ChannelName1>
            <ViewsDate1 isDark={isDark}>
              {viewCount} views • {agoTime}
            </ViewsDate1>
          </Description1>
        </DescContainer1>
      </SLink>
    </VideoContainer1>
  )
}

export default TrendingVideoItem
