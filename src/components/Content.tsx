import {useEffect, useState} from 'react';

import { MovieCard } from '../components/MovieCard';
import { Header } from '../components/Header'

import '../styles/content.scss';

import { api } from '../services/api';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreProps {
  selectedGenreId: number;
}

export function Content({selectedGenreId} : GenreProps) {
  // Complete aqui
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
      api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
        setMovies(response.data);
    });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <Header selectedGenreId = {selectedGenreId} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}