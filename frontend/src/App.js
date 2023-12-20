import logo from './logo.svg';
import './App.css';
import ToDo from './Components/ToDo';
import { useEffect, useState } from 'react';
import { addToDO, getALLToDo, updateToDo, deleteToDO } from './Components/utils/Handleapi';


// import { updateToDo } from '../../controllers/ToDoController';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isupdating, setisupdating] = useState(false);
  const [toDoId, setToDoId] = useState("");



  useEffect(() => {
    getALLToDo(setToDo);
  }, []);


  const updateMode = (_id, text) => {
    setisupdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">

        <div className="container">

          <h1>ToDo App</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Write Yout Daily Goals....."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />







            <div
              className="add btn btn-primary"
              onClick={isupdating ?
                () => updateToDo(toDoId, text, setToDo, setText, setisupdating)
                : () => addToDO(text, setText, setToDo)}>
              {isupdating ? "update" : "Add"}
            </div>




          </div>

          <div className="list container">

            {toDo.map((item) => <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteToDO(item._id, setToDo)}
            />)}

          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
