import { useEffect, useState } from 'react';
import './App.css';
import LoadingPage from './components/LoadingPage';
import RickAndMortyApp from './components/RickAndMortyApp';

function App() {
  const [loading, setLoading] = useState (true);
  const [apiData, setApiData] = useState ('');
  const [residentsData, setResidentsData] = useState ([]);
  const [location, setLocation] = useState (null);
  // Primer fetch para mostrar algo en pantalla (1 - 108)
  useEffect (
    () => {
      const url = `https://rickandmortyapi.com/api/location/${Math.floor (Math.random () *  108 + 1)}`;
      fetch (url).then (response => response.json ().then (data => setApiData (data)));
      setResidentsData ([])
    }, []
    )
  // Segundo fetch para buscar lo que el usuario decida
  useEffect (
    () => {
      if (location) {
        const url = `https://rickandmortyapi.com/api/location/?name=${location}`;
        fetch (url).then (response => response.json ().then (data => {
          // comprueba si la peticion del usuario es correcta
          if (!(data.hasOwnProperty ('error'))) {
            setApiData (data.results[0])
          }
          else {
            setApiData ({
              name: 'unknown',
              type: 'unknown',
              dimension: 'unknown',
              residents: []
            })
          }
        }));
        setResidentsData ([]);
      }
    }, [location]
    )
    // Desactiva la pantalla de carga
    useEffect (
      () => {
        if (apiData ) {
          setLoading (false);
        }
    }, [apiData]
  )
  return (
    <div>
      {
        loading
        ?
        <LoadingPage />
        :
        <RickAndMortyApp location={location} setLocation={setLocation} apiData={apiData} residentsData={residentsData} setResidentsData={setResidentsData} />
      }
    </div>
  );
}

export default App;
