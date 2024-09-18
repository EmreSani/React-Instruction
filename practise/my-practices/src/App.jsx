// import {List} from "./my-components/01-List";
// import {flowers} from "./assets/flowers.js";
// import { flowers2 } from "./assets/flowers-2.js";

// import { Types } from "./my-components/02-Types.jsx";

// import { Select } from "./my-components/03-Select.jsx";

// import { ColorPicker } from "./my-components/04-ColorPicker.jsx";

// import { Login } from "./my-components/05-Login.jsx";

// import { AddDeleteList } from "./my-components/06-Add-Delete-List.jsx";

// import { Home } from "./my-components/07-Searchbar Cards/Home.jsx";

import { Header } from "./my-components/08-API-Router/Header"
import { Users } from "./my-components/08-API-Router/Users"



function App() {
  

  return (
    <>
      {/* <List flowersArr={flowers}/>
      <List flowersArr={flowers2}/>
      <List/>
      <Types name="Ayşe" age={25}/>
      <Types name="Ali" age={35}/>
      <Types/> */}
      {/* <Select/> */}
      {/* <ColorPicker/> */}
      {/* <Login/> */}
      {/* <AddDeleteList/> */}
      {/* <Home/> */}
      <Header/>
      <Users/>
    </>
  )
}

export default App
