import { useEffect, useState } from "react";
import { User } from "./User";

export const Users = () => {
  let [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    // API'den veri alma
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // JSON formatına çevirme
      .then((data) => setUsers(data)) // Veriyi users'a verme
      .catch((err) => console.error("Hata alındı:" + err)); // Hata yakalama
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {users.map((obj) => (
        <span key={obj.id}>
          <User {...obj} />
        </span>
      ))}
    </div>
  );
};
