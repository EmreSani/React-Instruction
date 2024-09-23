import {Link, Outlet} from "react-router-dom";
import { GiAbstract039 } from "react-icons/gi";
import { useRef } from "react";

export const Layout = () => {

    let nav = useRef();

    console.log(nav);

    const navigate = (e)=>{

        for(let link of nav.current.children){
            link.style.fontSize = "16px";
        }
        e.target.style.fontSize = "20px";
    }

    let styleLink = "m-3 text-decoration-none text-light link";

  return (
    <div>
        <nav className="bg-success" ref={nav}>
            <GiAbstract039 className="m-3 ms-5 fs-2 text-light"/>
            <Link to="/" className={styleLink} onClick={navigate}>Home</Link>
            <Link to="/users" className={styleLink} onClick={navigate}>Users</Link>
            <Link to="/todos" className={styleLink} onClick={navigate}>Todos</Link>
        </nav>

        <Outlet/>
    </div>
  )
}
