import { TytleClient } from "../Corel/styles";
import { gimpText } from "./gimpText";
import { ClientsAreaComponent } from "./styles";
import { StyledLink } from "../Adobe/styles";

function GIMP() {
    return <>
    <StyledLink to="/clients"> &lt;&lt; back</StyledLink>
        <TytleClient>Introduction to GIMP</TytleClient>
        <ClientsAreaComponent>{gimpText}</ClientsAreaComponent>

    </>
  }
  
  export default GIMP;