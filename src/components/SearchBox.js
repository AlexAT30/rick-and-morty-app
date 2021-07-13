import { useState } from "react";
import logo from '../images/logo.png';

const SearchBox = ({ setLocation }) => {
  
  const [search, setSearch] = useState ('');

  return (
    <form className='SearchBox' >
      <img src={logo} alt='logo' />
      <div className='Search'>
        <input placeholder='type a location' value={search} onChange={
          e => setSearch (e.target.value)
        } />
        <button onClick={(e) => {
            e.preventDefault ();
            setLocation (search);
          }
        }>Search</button>
      </div>
    </form>


  )

}
export default SearchBox;