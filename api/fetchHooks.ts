import { useInfiniteQuery } from '@tanstack/react-query';
// Fetch function
import { fetchMovies } from './fetchFunctions';
// Types
import { Movies, ImgUrl } from './types';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery(['movies', search], ({ pageParam = 1 }) => fetchMovies(search, pageParam), {
    getNextPageParam: (lastPage: Movies) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
    refetchOnWindowFocus: false
  });
};


export const getImgUrl = (data: ImgUrl): string => {
  const backdropPath = data.pages[0]?.results[0]?.backdrop_path;

  if (backdropPath) {
    return IMAGE_BASE_URL + BACKDROP_SIZE + backdropPath;
  } else {
    return "/no_image.jpg";
  }
};

export const getGridTitle = (data: any, query: string | null): string => {
  if (query && data?.pages[0]?.total_results) {
    return `Search Results: ${data.pages[0].total_results}`;
  } else {
    return "Popular Movies";
  }
};
