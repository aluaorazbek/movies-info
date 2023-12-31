"use client";
import "@styles/globals.css";

import React from "react";
import Link from "next/link";
// Fetch hook
import { useFetchMovies, getImgUrl, getGridTitle } from "@api/fetchHooks";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
// Components


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
      <Hero
        imgUrl={ getImgUrl(data)}
        title={data.pages[0].results[0].title}
        text={data.pages[0].results[0].overview}
        />
      )}
      <Grid
        title={ getGridTitle(data, query)
        }
      >
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
       
      {(isLoading || isFetching) && <Spinner />}
    </main>
  );
};

export default HomePage;