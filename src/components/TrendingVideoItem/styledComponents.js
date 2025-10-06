import styled from 'styled-components'

export const VideoContainer1 = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  cursor: pointer;

  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 575px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Thumbnail1 = styled.img`
  width: 40%;
  margin-right: 20px;

  @media (max-width: 575px) {
    width: 100%;
  }
`

export const Profile = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 30px;

  margin-right: 10px;
  display: none;

  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    display: flex;
  }
`

export const DescContainer1 = styled.div`
  display: flex;

  @media (max-width: 576px) {
    padding: 15px;
  }
`

export const Description1 = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const Title1 = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-size: 18px;
  margin: 0px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const ChannelName1 = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;
  margin-bottom: 0px;

  @media (max-width: 576px) {
    display: none;
  }
`

export const ViewsDate1 = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 12px;
    margin: 0px;
    margin-top: 5px;
  }
`

export const ViewsDate2 = styled.h1`
  font-weight: 400;
  display: none;
  @media (max-width: 576px) {
    display: flex;
    color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
    font-size: 12px;
    margin: 0px;
    margin-top: 5px;
  }
`
