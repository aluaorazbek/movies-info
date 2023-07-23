"use client";
import "@styles/globals.css";

import React from "react";
import Link from "next/link";
// Fetch hook
import { useFetchMovies, getImgUrl, getGridTitle } from "@api/fetchHooks";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
// Components

//REVIEW - components 폴더와 같이 최상위 폴더는 절대 경로로 잡아주는게 좋을 것 같아요!
//REVIEW - 절대 경로로 잡아주면, 폴더 구조가 바뀌어도 상관없어요!
//REVIEW - tsconfig.json 파일에 "@components/*": ["components/*"] 이런 식으로 설정해서 사용하면 됩니다!
//REVIEW - 이렇게 설정하면, import Header from '@components/Header/Header'; 이런 식으로 사용할 수 있어요!
//REVIEW - componnets 폴더뿐만 아니라 styles, api 등 다른 폴더도 절대 경로로 잡아주면 좋을 것 같아요!

import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import Grid from "@components/Grid/Grid";
import Card from "@components/Card/Card";
import Spinner from "@components/Spinner/Spinner";

const HomePage = () => {
  const [query, setQuery] = React.useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Oh noooooo something went wrong!</div>;

  return (
    <main className="main-element" onScroll={handleScroll}>
      <Header setQuery={setQuery} />
      {!query && data && data.pages && (
      //REVIEW - imgUrl 데이터에 접근하는 부분이 조금 복잡해 보이네요.
      //REVIEW - getImgUrl 함수를 따로 만들어서, 데이터에 접근하는 부분을 간단하게 만들어주면 좋을 것 같아요!
      <Hero
        imgUrl={ getImgUrl(data)}
        title={data.pages[0].results[0].title}
        text={data.pages[0].results[0].overview}
        />
      )}
      <Grid
        //REVIEW - 이 부분도 imgUrl처럼 getGridTitle 함수를 따로 만들어서, 데이터에 접근하는 부분을 간단하게 만들어주면 좋을 것 같아요!
        title={ getGridTitle(data, query)
        }
      >
        {/* REVIEW 
      다음 코드를 이런식으로 수정하면 어떨까요?
      → 개인적으로 삼항 연산자는 가독성을 떨어트릴 수 있다고 생각하기에 최소한으로 사용 고집하고 있습니다!
      ex) {data?.pages && data.pages.map((page => ......))
       */}
        {data && data.pages &&
          data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <div className="card-pointer">
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : "/no_image.jpg"
                      }
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            )
          }
      </Grid>
      {/* REVIEW 
      이러한 로딩처리는 return 외부에서 선언하는 것이 어떨까요?
      → 개인적으로 return 문 안에서 UI 코드만 있는 것이 가독성을 높여준다고 생각합니다.
      ex) if(isLoading || isFetching) return <Spinner /> → 30 번째 줄 (30 lines)
       */
        //REVIEW - 이부분은 상단에서 처리해줄 수 있을 것 같네요. 그리고
        //REVIEW - 삼항연산자를 사용하는 대신에 && 연산자를 사용하면 더 깔끔해질 것 같아요!
        //REVIEW - 예를 들어, isLoading && <Spinner /> 이런 식으로 사용하면 됩니다!
       }
       
      {(isLoading || isFetching) && <Spinner />}
    </main>
  );
};

export default HomePage;