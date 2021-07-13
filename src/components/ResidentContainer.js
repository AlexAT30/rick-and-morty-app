import { useEffect } from "react";
import ResidentsInfo from "./ResidentInfo";

const ResidentContainer = ({ residentsUrl, residentsData, setResidentsData }) => {
  // Hace fetch de cada una de las url obtenidas de la API y las agrega en un arreglo
  useEffect (
    () => {
      residentsUrl.forEach( (element) => {
        fetch (element).then (response => response.json ().then (data => {
          setResidentsData (oldArray => [...oldArray, data])
        }))

      });
    }, [setResidentsData, residentsUrl]
  )
  // Nos pinta la informacion de los residentes en una lista con un limite de 9 residentes
  const residentsList = residentsData.map ((item, index) => {
    if (index < 9) {
      return <ResidentsInfo key={item.id} name={item.name} species={item.species} image={item.image} gender={item.gender} status={item.status} origin={item.origin} episode={item.episode} />
    }
    else {return null}
  })

  return (
    <div className='ResidentsContainer'>
      {residentsData.length !== 0
      ?
      residentsList
      :
      <div className='residentsZero'>
        <p> There is nothing here  </p>
      </div>
    }
    </div>
  )

}
export default ResidentContainer;