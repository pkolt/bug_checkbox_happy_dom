import { Container, Spinner } from './styled';
import './styled';

interface BugMediaQueryProps {
  onClick?: () => void;
}

export const BugMediaQuery: React.FC<BugMediaQueryProps> = ({ onClick }) => {
  return (
    <Container>
      <Spinner data-testid="spinner" onClick={onClick} />
    </Container>
  );
};
