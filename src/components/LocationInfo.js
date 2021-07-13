const LocationInfo = ({ name, type, dimension }) => {
  return (
    <div className='LocationInfo'>
      <div className='LocationItem' >
        <p> Name: </p>
        <p className='LocationItemInfo' > {name} </p>
      </div>
      <div className='LocationItem' >
        <p> Type: </p>
        <p className='LocationItemInfo' > {type} </p>
      </div>
      <div className='LocationItem' >
        <p> Dimension: </p>
        <p className='LocationItemInfo' > {dimension} </p>
      </div>
    </div>
  )
}
export default LocationInfo;
