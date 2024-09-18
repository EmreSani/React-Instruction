
import { FormControl } from 'react-bootstrap';
import PropTypes from "prop-types";

export const SearchBar = (props) => {

  // Debouncing
  let timer;

  const handleInput = (e)=>{
    timer && clearTimeout(timer);
    timer = setTimeout(()=>props.setSearchText(e.target.value), 1000);
  }

  return (
    <div className='p-3'>
        <FormControl className='w-75 m-auto' onChange={handleInput}/>
    </div>
  )
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func
}
