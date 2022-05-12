import { Button, Container, Flex, Progressbar, Tabs, Typography } from '@g-loot/component-library';
import { compose, layout, space } from 'styled-system';

import styled from 'styled-components';

const StyledTopbar = styled.div`
  background-color: ${(props) => props.theme.colors.ui[800]};
  border: double 1px transparent;
  background-image: linear-gradient(to bottom, ${(props) => props.theme.colors.ui[700]} 0, ${(props) => props.theme.colors.ui[800]} 5rem),
    linear-gradient(to bottom, #2e2e5c 0px, ${(props) => props.theme.colors.ui[600]} 1rem, ${(props) => props.theme.colors.ui[700]} 2rem);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
const Wrapper = styled.div`
  ${compose(layout, space)};
`;

export default function Topbar() {
  return (
    <StyledTopbar>
      <Wrapper maxWidth={[ 768, null, null, 1600 ]} m="auto" paddingX={[ 2, 3 ]}>
        <Typography variant="bodyMedium" color="ui.100">
          bodyMedium
        </Typography>
      </Wrapper>
    </StyledTopbar>
  );
}
