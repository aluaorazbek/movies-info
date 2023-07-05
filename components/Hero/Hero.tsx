import Image from 'next/image';
import { Wrapper, ContentWrapper, TextWrapper } from '../styles/Hero.styled';

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ({ imgUrl, title, text }: Props) => (
  <Wrapper>
  <ContentWrapper>
    <TextWrapper>
      <h2>{title}</h2>
      <p>{text}</p>
    </TextWrapper>
  </ContentWrapper>
  <Image className="hero-image" priority fill src={imgUrl} alt='hero-image' />
</Wrapper>
);

export default Hero;
