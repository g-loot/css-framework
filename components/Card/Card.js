import styled from 'styled-components';

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  background: ${(props) => props.theme.colors.ui[500]};
  &:hover {
    opacity: 0.5;
  }
`;

export default function Card() {
  return <StyledCard />;
}
