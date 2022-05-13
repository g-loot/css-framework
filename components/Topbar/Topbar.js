import { Button, Container, Flex, Progressbar, Tabs, Typography } from '@g-loot/component-library';
import { compose, layout, space } from 'styled-system';

import styled from 'styled-components';

const StyledTopbar = styled.header.attrs({ 
  className: 'flex h-24 w-full bg-ui-700' 
})``;


const Wrapper = styled.div.attrs({ 
  className: 'flex h-24' 
})``;

export default function Topbar() {
  return (
    <StyledTopbar>
      <Wrapper>
        <div className='text-4xl lg:text-5xl'>
          Test
        </div>
      </Wrapper>
    </StyledTopbar>
  );
}
