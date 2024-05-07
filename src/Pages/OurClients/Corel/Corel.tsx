import { corelText } from './corelText';
import { ClientsAreaComponent, TytleClient } from './styles';
import { StyledLink } from '../Adobe/styles';

function Corel() {
  return (
    <> <StyledLink to="/clients"> &lt;&lt; back</StyledLink>
      <ClientsAreaComponent>
        <TytleClient>About Corel Corporation</TytleClient>
        {corelText}
      </ClientsAreaComponent>
    </>
  );
}

export default Corel;
