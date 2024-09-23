import { useEffect, useState } from "react";
import { Todo } from "./Todo";

export const Todos = () => {
  let [todos, setTodos] = useState([]);

  

  useEffect(() => {
    // API'den veri alma
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json()) // JSON formatına çevirme
      .then((data) => setTodos(data)) // Veriyi users'a verme
      .catch((err) => console.error("Hata alındı:" + err)); // Hata yakalama
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {todos.map((obj) => (
        <span key={obj.id}>
          <Todo {...obj} />
        </span>
      ))}
    </div>
  );
};
