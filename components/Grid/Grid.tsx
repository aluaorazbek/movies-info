import { Wrapper } from '../styles/Grid.styled';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Grid = ({ title, children }: Props) => (

  <Wrapper>
    <h2>{title}</h2>
    <div>{children}</div>
  </Wrapper>
);

export default Grid;
