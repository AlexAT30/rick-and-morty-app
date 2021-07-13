import LocationContainer from "./LocationContainer";
import ResidentContainer from "./ResidentContainer";
import SearchBox from "./SearchBox";

const RickAndMortyApp = ({ setLocation, apiData, residentsData, setResidentsData }) => {
  const residentsUrl = apiData.residents
  return (
    <div className='RickAndMortyApp' >
      <SearchBox setLocation={setLocation} />
      <LocationContainer apiData={apiData} />
      <div className='residentsBackground' >
        <ResidentContainer residentsUrl={residentsUrl} residentsData={residentsData} setResidentsData={setResidentsData} />
      </div>
    </div>
  )

}
export default RickAndMortyApp;