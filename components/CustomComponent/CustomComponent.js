import styled from 'styled-components';

const StyledCustomComponent = styled.div`
  background-color: ${(props) => props.theme.colors.ui[800]};
  border: double 1px transparent;
  background-image: linear-gradient(to bottom, ${(props) => props.theme.colors.ui[700]} 0, ${(props) => props.theme.colors.ui[800]} 5rem),
    linear-gradient(to bottom, #2e2e5c 0px, ${(props) => props.theme.colors.ui[600]} 1rem, ${(props) => props.theme.colors.ui[700]} 2rem);
  background-origin: border-box;
  background-clip: content-box, border-box;
  
`;

export default function CustomComponent() {
  return <StyledCustomComponent />;
}
