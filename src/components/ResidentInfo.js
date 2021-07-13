import { useState } from "react";

const ResidentsInfo = ({ name, species, image, gender, status, origin, episode }) => {
  const [imageHover, setImageHover] = useState (false);
  return (
    <div>
      <div className='residentImage' style={
        {
          backgroundImage: `url(${image})`,
          width: '300px',
          height: '300px'
        }
      } onMouseEnter={ () => setImageHover(true)} onMouseLeave={() =>setImageHover(false)} >
        <div className={`residentInformation residentInformation-${imageHover}`}>
          <p className={`residentName name-${status}`}> {name} </p>
          <p className='residentSpecies'> {`Specie: ${species}`} </p>
          <p className='residentGenderStatus' > {gender} - {status} </p>
          <p className='residentOrigin'> {`Origin: ${origin.name}`} </p>
          <p className='residentChapters'> Chapters: {episode.length} </p>
        </div>
      </div>

    </div>
  )

}
export default ResidentsInfo;