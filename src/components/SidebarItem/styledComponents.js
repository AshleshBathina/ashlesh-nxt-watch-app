import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props =>
    props.isActive ? `${props.isDark ? '#383838' : '#e2e8f0'}` : `transparent`};
  padding: 10px 18px;
`

export const ItemContentButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  margin-right: 20px;
  color: ${props =>
    props.isActive
      ? '#ff0000'
      : `${props.isDark ? '#909090' : '#606060'};
`};

  @media (max-width: 767px) {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`

export const ItemName = styled.p`
  font-size: 16px;
  font-family: Roboto;
  margin: 0px;
  color: ${props =>
    props.isActive
      ? `${props.isDark ? '#f9f9f9' : '#1e293b'}`
      : `${props.isDark ? '#cccccc' : '#606060'}
`};

  font-weight: ${props => (props.isActive ? 600 : 400)};

  @media (max-width: 767px) {
    font-size: 13px;
    font-family: Roboto;
    font-weight: ${props => (props.isActive ? 600 : 400)};
  }
`
