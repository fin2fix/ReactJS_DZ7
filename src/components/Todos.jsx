import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../reducers/todosSlice";
import { useEffect } from "react";

export default function Todos() {
  const { entities, status, error } = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(fetchTodos());
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <section>
      <h2>Todos: </h2>
      {status === "loading" && <h3>Loading...</h3>}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={clickHandler}>Retry</button>
        </div>
      )}
      {status === "success" && (
        <ul style={{ textAlign: "left" }}>
          {entities.map((todo) => (
            <li
              key={todo.id}
            >{`${todo.title[0].toUpperCase()}${todo.title.slice(1)}`}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
