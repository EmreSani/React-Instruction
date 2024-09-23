import PropTypes from "prop-types"
import { GiAbstract039 } from "react-icons/gi";

export const Header = (props) => {
  return (
    <div className="bg-success text-light d-flex align-items-center menu">
        <GiAbstract039 className="m-3 ms-5 fs-2"/>
        <p className="m-3" onClick={(e)=>props.setMenuItem(e.target.innerText)}>Home</p>
        <p className="m-3" onClick={(e)=>props.setMenuItem(e.target.innerText)}>Users</p>
        <p className="m-3" onClick={(e)=>props.setMenuItem(e.target.innerText)}>Todos</p>
    </div>
  )
}

Header.propTypes = {
  setMenuItem: PropTypes.func
}