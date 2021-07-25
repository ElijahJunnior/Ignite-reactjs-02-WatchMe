import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { SelectedGenreContext } from './contexts/SelectedGenreContext';

import './styles/global.scss';

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SelectedGenreContext.Provider value={{ selectedGenreId, setSelectedGenreId }} >
        <SideBar />
        <Content />
      </SelectedGenreContext.Provider>
    </div >
  )

}