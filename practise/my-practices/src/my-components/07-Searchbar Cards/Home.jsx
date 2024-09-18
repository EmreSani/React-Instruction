import { useState } from "react"
import { Cards } from "./Cards"
import { SearchBar } from "./SearchBar"


export const Home = () => {

  let [searchText, setSearchText] = useState("");
  console.log(searchText);

  return (
    <div className="bg-dark">
        <SearchBar setSearchText = {setSearchText}/>
        <Cards searchText = {searchText}/>
    </div>
  )
}
