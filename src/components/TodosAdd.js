import { useMessage } from "../context/messageContext";

const TodosAdd = () => {
  const { message , showMessage } = useMessage();
  const token = localStorage.getItem("token") || "";
  const api = process.env.REACT_APP_URL;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const title = e.target[0].value.trim();
      await fetch(`${api}todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          done: false,
        }),
      });
      showMessage("Todo added !! ", 3000 );
      e.target[0].value = "";
      window.location.reload();
    } catch (err) {
      showMessage(err.message);
    }
  };

  return (
    <div className=" mt-6 w-[96%] bg-zinc-900 lg:p-3 rounded-xl ">
      <form onSubmit={submitHandler} className="flex gap-4 items-center justify-between w-full px-3 ">
        <input type="text" placeholder="Enter todo title" autoComplete="off"
        className="w-[70%]  placeholder:text-zinc-700 h-[3rem] text-2xl  bg-transparent  outline-none rounded-lg text-white "
        required/>
        <button type="submit"
        className="w-fit text-[#fff]  lg:text-lg lg:px-4 px-2 py-1 font-semibold rounded-2xl  bg-[#2fe2a69f] "
        >Add Todo</button>
      </form>
      {message && <p className="toast">{message}</p>}
    </div>
  );
};

export default TodosAdd;
