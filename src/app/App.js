import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Card } from "../components/Card/Card";

function App() {
  const [todosArray, setTodosArray] = useState([]);
  const [inputValue, setInput] = useState("");

  const createTodosArray = () => {
    if (inputValue.length) {
      setTodosArray([
        ...todosArray,
        { text: inputValue, id: Date.now(), done: false },
      ]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodosArray(todosArray.filter((el) => el.id !== id));
  };

  const deleteSelected = () => {
    setTodosArray(todosArray.filter((el) => el.done === false));
  };

  const toggleDone = (id) => {
    setTodosArray(
      todosArray.map((el) => {
        if (el.id === id) {
          el.done = !el.done;
          return el;
        } else {
          return el;
        }
      })
    );
  };

  const deleteAll = () => {
    setTodosArray([]);
  };

  console.log(todosArray);

  return (
    <>
      <Header />
      <main>
        <Card
          setInput={setInput}
          inputValue={inputValue}
          todosArray={todosArray}
          createTodosArray={createTodosArray}
          deleteTodo={deleteTodo}
          deleteAll={deleteAll}
          toggleDone={toggleDone}
          deleteSelected={deleteSelected}
        />
      </main>
    </>
  );
}

export default App;
