import { TytleClient } from "../Corel/styles";
import { adobeText } from "./adobeText";
import { ClientsAreaComponent, StyledLink } from "./styles";



function Adobe() {
    return <>
     <StyledLink to="/clients"> &lt;&lt; back</StyledLink>
  
        <TytleClient>Adobe Systems Incorporated</TytleClient>
        <ClientsAreaComponent>{adobeText}</ClientsAreaComponent>
    </>
  }
  
  export default Adobe;