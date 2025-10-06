import styled from 'styled-components'

export const SidebarContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  list-style-type: none;
  padding-left: 0px;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    display: flex;
  }
`
