import styled from 'styled-components';
import { useTheme } from 'styled-components';

const StyledCustomComponent = styled.div`
  width: 200px;
  height: 200px;
  background: ${(props) => props.theme.colors.ui[500]};
  &:hover {
    opacity: 0.5;
  }
`;

export default function CustomComponent() {
  const theme = useTheme();
  return <StyledCustomComponent />;
}
