import Link from 'next/link';
import { Background, Container, StyledLink, Separator, Title } from '../styles/Breadcrumb.styled';


type Props = {
  title: string;
};

const Breadcrumb = ({ title }: Props) => (
  <Background>
    <Container>
      <Link href='/'>
        <StyledLink>Home</StyledLink>
      </Link>
      <Separator>|</Separator>
      <Title>{title}</Title>
    </Container>
</Background>

);

export default Breadcrumb;
