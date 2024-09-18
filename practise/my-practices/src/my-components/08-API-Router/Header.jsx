import { GiAbstract039 } from "react-icons/gi";

export const Header = () => {
  return (
    <div className="bg-success text-light d-flex align-items-center menu">
        <GiAbstract039 className="m-3 ms-5 fs-2"/>
        <p className="m-3">Home</p>
        <p className="m-3">Users</p>
        <p className="m-3">Todos</p>
    </div>
  )
}
