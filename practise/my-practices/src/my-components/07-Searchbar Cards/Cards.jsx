import { MyCard } from './Card';
import data from "../../assets/flowers.json";
import PropTypes from "prop-types";

export const Cards = (props) => {

  let filteredArray = data.filter((obj)=>obj.name.toLowerCase().includes(props.searchText.toLowerCase()));

  return (
    <div className='d-flex flex-wrap justify-content-center text-light'>
        {props.searchText ? filteredArray.map((obj)=><span key={obj.name}><MyCard {...obj}/></span>) : data.map((obj)=><span key={obj.name}><MyCard {...obj}/></span>)}
        
    </div>
  )
}

Cards.propTypes = {
  searchText: PropTypes.string,
}
