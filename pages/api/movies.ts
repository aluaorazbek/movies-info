// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// API URLs
import { SEARCH_BASE_URL, POPULAR_BASE_URL, movieUrl, creditsUrl } from '../../config';
import { basicFetch } from '../../api/fetchFunctions';
// Types
import { Movies, Movie, Credits } from '../../api/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search } = req.query; // Grab search params

  const endpoint: string = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}

export async function getMovieData(id: string): Promise<Movie> {
  const movie = await fetch(movieUrl(id));
  return (await movie.json()) as Movie;
}

export async function getCreditsData(id: string): Promise<Credits> {
  const credits = await fetch(creditsUrl(id));
  return (await credits.json()) as Credits;
}


// import { useQuery } from '@tanstack/react-query';
// export function useMovieData(id: string) {
//   return useQuery<Movie>(['movie', id], () => getMovieData(id));
// }
// export function useCreditsData(id: string) {
//   return useQuery<Credits>(['credits', id], () => getCreditsData(id));
// }



// import axios from 'axios';
// // import { movieUrl, creditsUrl } from './config';
// // import type { Movie, Credits } from './types';

// // Fetch movie data
// export async function getMovieData(id: string): Promise<Movie> {
//   const response = await axios.get(movieUrl(id));
//   return response.data as Movie;
// }

// // Fetch credits data
// export async function getCreditsData(id: string): Promise<Credits> {
//   const response = await axios.get(creditsUrl(id));
//   return response.data as Credits;
// }
