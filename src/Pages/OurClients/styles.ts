import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const ContainerClients = styled.div`

  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 20px;
`

export const LinksContainer = styled.nav`
  display: flex;
  gap: 10px;
  padding: 20px;
`

export const StyledClientsLink = styled(NavLink)`
text-decoration: none;
 font-size: 20px;
`

