import styled from 'styled-components'

export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 24%;
  margin-bottom: 30px;
  cursor: pointer;

  @media (min-width: 576px) and (max-width: 767px) {
    width: 32%;
  }

  @media (max-width: 575px) {
    width: 50%;
    padding: 0px 15px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const DescContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
  }
`

export const Profile = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  margin-top: 10px;
  margin-right: 10px;

  @media (max-width: 767px) {
    height: 30px;
    width: 30px;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`

export const Title = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-size: 18px;
  margin: 0px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const ChannelName = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;
  margin-bottom: 0px;
  @media (max-width: 576px) {
    display: none;
  }
`

export const ViewsDate = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 12px;
    margin: 0px;
    margin-top: 5px;
  }
`

export const ViewsDate2 = styled.p`
  display: none;
  @media (max-width: 576px) {
    display: flex;
    color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  }
`
