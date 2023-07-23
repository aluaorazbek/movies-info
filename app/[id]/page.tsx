import React from 'react';
import {
  movieUrl,
  creditsUrl,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../../config';
// Components
import Header from '@components/Header/Header';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import MovieInfo from '@components/MovieInfo/MovieInfo';
import Actors from '@components/Actors/Actors';
import Spinner from '@components/Spinner/Spinner';
// Types
import type { Movie, Credits } from '@api/types';
import { getMovieData, getCreditsData } from '../../pages/api/movies';

type Props = {
  params: {
    id: string;
  }
}

//REVIEW - 데이터를 가져오는 api로직을 컴포넌트 파일 외부로 분리해주면 좋을 것 같아요!
//REVIEW - api 로직을 컴포넌트 UI 로직과 분리해주면, 코드 가독성과 유지보수성이 좋아집니다. 그리고 추후 테스트코드를 작성할 때도 편리해집니다!
//REVIEW - 저희는 services 폴더를 만들어서, 도메인별로 데이터를 가져오는 api 레이어를 분리해주고 있어요!
//REVIEW - 예를 들어서, movie 데이터를 가져오는 api 로직은 services/movie.ts 파일에 작성해줄 수 있겠네요!
//REVIEW - 그리고 HomePage에서 사용한 것처럼 MoviePage에서도 React-query를 사용해주면 좋을 것 같아요!

export default async function MoviePage({ params: { id } }: Props) {
  const _movie = getMovieData(id);
  const _credits = getCreditsData(id);

  const movie = await _movie;

  return (
    <main>
      <Header />
      <Breadcrumb title={movie.original_title} />
      <React.Suspense fallback={<Spinner />}>
        <MovieInfo
          creditsPromise={_credits}
          thumbUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : '/no_image.jpg'}
          rating={movie.vote_average}
          year={movie.release_date.split('-')[0]}
          backgroundImgUrl={
            movie.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path : '/no_image.jpg'
          }
          title={movie.original_title}
          summary={movie.overview}
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <Actors creditsPromise={_credits} />
      </React.Suspense>
    </main>
  );
}



// export default function MoviePage({ params: { id } }: Props) {
//   const movieQuery = useQuery(['movie', id], () => getMovieData(id));
//   const creditsQuery = useQuery(['credits', id], () => getCreditsData(id));

//   const { data: movie, isLoading: isMovieLoading, error: movieError } = movieQuery;
//   const { data: credits, isLoading: isCreditsLoading, error: creditsError } = creditsQuery;

//   if (isMovieLoading || isCreditsLoading) {
//     return <Spinner />;
//   }

//   if (movieError || creditsError) {
//     return <div>Error occurred while fetching data.</div>;
//   }

//   const creditsPromise = Promise.resolve(credits ?? {} as Credits); 

//   return (
//     <main>
//       <Header />
//       {movie && (
//         <>
//           <Breadcrumb title={movie.original_title} />
//           <React.Suspense fallback={<Spinner />}>
//             <MovieInfo
//               creditsPromise={creditsPromise}
//               thumbUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : '/no_image.jpg'}
//               rating={movie.vote_average}
//               year={movie.release_date.split('-')[0]}
//               backgroundImgUrl={
//                 movie.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path : '/no_image.jpg'
//               }
//               title={movie.original_title}
//               summary={movie.overview}
//               time={movie.runtime}
//               budget={movie.budget}
//               revenue={movie.revenue}
//             />
//             <Actors creditsPromise={creditsPromise} />
//           </React.Suspense>
//         </>
//       )}
//     </main>
//   );
// } 
