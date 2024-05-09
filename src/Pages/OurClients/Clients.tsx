
import { LinksContainer, StyledClientsLink } from "./styles";


function Clients() {
  return (
    <>
      Clients page

      <LinksContainer>
          <StyledClientsLink to='/adobe' style = {({isActive})=>({textDecoration: isActive? 'underline' : 'none'})}> Adobe |</StyledClientsLink>
          <StyledClientsLink to='/corel' style = {({isActive})=>({textDecoration: isActive? 'underline' : 'none'})}> Corel |</StyledClientsLink>
          <StyledClientsLink to='/Gimp' style = {({isActive})=>({textDecoration: isActive? 'underline' : 'none'})}> GIMPa</StyledClientsLink>
          </LinksContainer>

    </>
  );
}

export default Clients;
