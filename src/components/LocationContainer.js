import LocationInfo from "./LocationInfo"

const LocationContainer = ({ apiData }) => {
  const name = apiData.name;
  const type = apiData.type;
  const dimension = apiData.dimension;
  return (
    <div>
      <LocationInfo name={name} type={type} dimension={dimension} />
    </div>
  )

}
export default LocationContainer;