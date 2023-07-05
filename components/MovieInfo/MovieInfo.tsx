import Image from 'next/image';
import { Wrapper, Container } from '../styles/MovieInfo.styled';
//Prepared helper functions
import { calcTime, convertMoney } from '../../helpers';
// Components
import Thumb from '../Thumb/Thumb';
import Pill from '../Pill/Pill';
// Types
import { Crew, Credits } from '../../api/types';

type Props = {
  creditsPromise: Promise<Credits>;
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = async ({
  creditsPromise,
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  time,
  budget,
  revenue
}: Props) => {
  const credits = await creditsPromise;

  const directors = credits.crew.filter((member: Crew) => member.job === 'Director');

  return (
    <Wrapper>
      <Container>
        <div className="image-container">
          <Thumb imgUrl={thumbUrl} />
          <div className="rating">{rating}</div>
        </div>
        <div className="info-container">
          <h2>
            {title} 
            (Release date: {year})
          </h2>
          <h3>Summary</h3>
          <p>{summary}</p>
          <div>
            <div>
              <h3>Director</h3>
              <div>
                  {directors.map(director => (
                    <p key={director.credit_id}>{director.name}</p>
                  ))}
              </div>
            </div>
            <div className="pill-cover">
              <h3>Movie data</h3>
              <Pill  text={`Running time: ${calcTime(time)}`} />
              <Pill text={`Budget: ${convertMoney(budget)}`} />
              <Pill text={`Revenue: ${convertMoney(revenue)}`} />
            </div>
          </div>
        </div>
      </Container>
      <Image priority placeholder='blur' blurDataURL='/placeholder.jpg' fill src={backgroundImgUrl} alt='thumb' />
    </Wrapper>
  );
};

export default MovieInfo;
