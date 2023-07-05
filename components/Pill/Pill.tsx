import { StyledPill } from '../styles/Pill.styled';

type Props = {
  text: string;
};

const Pill = ({ text }: Props) => (
  <StyledPill> 
    {text}
  </StyledPill>
);

export default Pill;



