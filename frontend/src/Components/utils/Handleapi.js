// Handleapi.js
import axios from 'axios';
import { baseUrl} from "../utils/contant";
// const baseUrl = "http://localhost:7000";

const getALLToDo = (setToDo) => {
  axios.get(baseUrl)
    .then(({ data }) => {
      console.log('data--->', data);
      setToDo(data);
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
    });
};

const addToDO = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getALLToDo(setToDo);
    })
    .catch((error) => {
      console.error("Error adding todo:", error);
    });
};

const updateToDo = (toDoId, text, setToDo, setText, setisupdating) => {
  axios.post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setisupdating(false);
      getALLToDo(setToDo);
    })
    .catch((error) => {
      console.error("Error updating todo:", error);
    });
};


const deleteToDO = (_id, setToDo) => {

  axios.post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getALLToDo(setToDo);
    })
    .catch((error) => {
      console.error("Error adding todo:", error);
    });
};


export { getALLToDo, addToDO, updateToDo ,deleteToDO};
