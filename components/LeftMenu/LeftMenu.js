import styled from 'styled-components';

const StyledLeftMenu = styled.div`
  background: ${(props) => props.theme.colors.ui[500]};
  font-size: 1rem;
`;

export default function LeftMenu() {
  return (
    <StyledLeftMenu>
      <div>
        qsdqsd
      </div>
    </StyledLeftMenu>
  );
}
