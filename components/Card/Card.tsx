import Thumb from '../Thumb/Thumb';
import { Wrapper, ContentWrapper } from '../styles/Card.styled'

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

const Card = ({ imgUrl, title, subtitle }: Props) => (
  <Wrapper>
    <ContentWrapper>
      <Thumb imgUrl={imgUrl} />
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </ContentWrapper>
  </Wrapper>
);

export default Card;
