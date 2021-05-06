import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

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

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <>
        <SideBar 
          setSelectedGenreId = {setSelectedGenreId}
          selectedGenreId = {selectedGenreId} 
        />
        <Content selectedGenreId = {selectedGenreId} />
      </>


    </div>
  )
}