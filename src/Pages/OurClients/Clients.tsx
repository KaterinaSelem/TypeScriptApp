import { LinksContainer, StyledClientsLink } from "./styles";


function Clients() {
  return (
    <>
      Clients page

      <LinksContainer>
          <StyledClientsLink to='./Adobe/adobe' style = {({isActive})=>({textDecoration: isActive? 'underline' : 'none'})}> Adobe |</StyledClientsLink>
          <StyledClientsLink to='./Corel/corel' style = {({isActive})=>({textDecoration: isActive? 'underline' : 'none'})}> Corel |</StyledClientsLink>
          <StyledClientsLink to='./GIMP/Gimp' style = {({isActive})=>({textDecoration: isActive? 'underline' : 'none'})}> GIMP</StyledClientsLink>
          </LinksContainer>

    </>
  );
}

export default Clients;
