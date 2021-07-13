import { useEffect, useState } from 'react';
import './App.css';
import LoadingPage from './components/LoadingPage';
import RickAndMortyApp from './components/RickAndMortyApp';

function App() {

  const [loading, setLoading] = useState (true);
  const [apiData, setApiData] = useState ('');
  const [residentsData, setResidentsData] = useState ([]);
  const [location, setLocation] = useState (null);
  useEffect (
    () => {
      const url = `https://rickandmortyapi.com/api/location/${Math.floor (Math.random () *  108 + 1)}`;
      fetch (url).then (response => response.json ().then (data => setApiData (data)));
      setResidentsData ([])
    }, []
    )
  useEffect (
    () => {
      if (location) {
        const url = `https://rickandmortyapi.com/api/location/?name=${location}`;
        fetch (url).then (response => response.json ().then (data => {
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
    useEffect (
      () => {
        if (apiData ) {
          console.log(apiData);
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
