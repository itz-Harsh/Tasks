import { useState, useEffect } from "react";
import { useMessage } from "../context/messageContext";

const TodosGET = () => {
  const { showMessage } = useMessage();
  const [data, setData] = useState([]); // Initialize as an empty array

  const token = localStorage.getItem("token") || "";

  const api = process.env.REACT_APP_URL;
  // console.log(api);

 const fetchTodos = async () => {
    try {
      const res = await fetch(`${api}todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();

      if (Array.isArray(result)) {
        setData(result);
      } else {
        setData([]); 
        console.error("Unexpected response format:", result);
      }
    } catch (err) {
      console.error("Error fetching todos:", err);
      showMessage("Failed to fetch todos", 2000);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await fetch(`${api}todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      showMessage("Todo deleted!", 3000);
      fetchTodos();
    } catch (err) {
      showMessage(`Error: ${err.message}`, 3000);
    }
  };

  const updateHandler = async (id, done) => {
    try {
      await fetch(`${api}todos/${id}`,{
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          done: !done
        })
      })
      showMessage("Updated", 3000);
      fetchTodos();
    }catch(err){
      console.log(err.message)
    }
  } 

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className=" mt-6 w-[96%] bg-zinc-900 lg:px-6 px-3 lg:py-4 py-3 rounded-xl ">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-xl font-thin text-zinc-400 pl-2">T i t l e</h1>
      <button onClick={fetchTodos} className=" hover:bg-zinc-800 p-2 rounded-full ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21.89 12C21.89 17.52 17.41 22 11.89 22C6.37 22 3 16.44 3 16.44M3 16.44H7.52M3 16.44V21.44" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      </div>
      

      {data.length > 0 ? (
        data.map((todo , index) => (
          <div className="bg-[#151518] lg:px-3 px-2 py-1 mb-2 text-lg rounded-lg" key={todo.id}>
            <li className="flex justify-evenly mb-1 gap-2 items-center pr-1 w-full">
              {index+1}.<p className="flex-grow text-left my-2">
              {todo.title.charAt(0).toUpperCase() + todo.title.slice(1) }
            </p>
            <button onClick={() => deleteHandler(todo.id)}
            className="w-fit text-[#fff] text-sm px-3 py-1 h-fit font-semibold rounded-2xl  bg-[#e22f47] "
              >Delete</button>
            <label className="text-xl hover:cursor-pointer lg:pl-5" 

                onClick={() => updateHandler(todo.id, todo.done)}
             >
            
              {todo.done ? "✅" : "❌"}
            </label>
            </li>
            
          </div>
        ))

      ) : (
        <p>No todos available.</p>
      )}
    </div>
  );
};

export default TodosGET ;
