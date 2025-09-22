import { doSignInWithGoogle, doSignOut } from "../components/firebase";
import {  useState } from "react";
import { useAuth } from "../context/authContext";
import Galaxy from "../components/Galaxy";
import TodosAdd from "../components/TodosAdd";
import GetTodos from "../components/TodosGET";
import Clock from "../components/Clock";

const Home = () => {
  const { currentUser } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const isAuthenticate = !!localStorage.getItem("token");

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!loggedIn) {
      setLoggedIn(true);
      try {
        await doSignInWithGoogle();
        window.location.reload();
      } catch (err) {
        setLoggedIn(false);
        console.log("Google sign in error");
      }
    }
  };

  const signOutHandler = async () => {
    try {
      await doSignOut();
      window.location.reload();
    } catch (err) {
      console.log("Sign out error");
    }
  };

  return (
    <>
      {isAuthenticate ? (
        <div className="App flex flex-col items-center  ">
          <div className="flex  items-center gap-3 w-full justify-between p-2 border-b-[1px] rounded-lg shadow-zinc-900 shadow-2xl border-gray-600 ">
            <div className=" flex items-center gap-3 ">
              <img
                src={currentUser.photoURL.replace("s96-c", "s400-c")}
                alt="profile"
                className="lg:h-[5rem] h-[4rem] rounded-full"
              />
              <h2 className="flex flex-col ">
                <p className="lg:text-sm text-xs">Welcome,</p>
                <p className="lg:text-xl font-semibold ">
                  {currentUser.displayName}
                </p>
              </h2>
            </div>

            <Clock />

            <button
              className="w-fit text-[#fff] lg:text-lg px-4 py-1 font-semibold rounded-2xl  bg-[#e22f47] "
              onClick={signOutHandler}
            >
              Sign Out
            </button>
          </div>
          <TodosAdd />
          <GetTodos />
        </div>
      ) : (
        <div className="App">
          <Galaxy />
          <span className="top-center lg:w-[15rem] w-[13rem] flex flex-col gap-2">
            <h1 className="text-center text-3xl font-semibold">Tasks</h1>
            <button
              className="flex gap-3 justify-center items-center 
    p-2 w-full lg:h-10 h-9    text-black bg-white rounded-full 
    cursor-pointer border-none
    transition ease-in duration-150
    hover:bg-gray-200 
    active:scale-95
  "
              onClick={(e) => {
                onGoogleSignIn(e);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className=""
                viewBox="0 0 261 261"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>
              <p className="font-semibold lg:text-base text-[0.9rem]">Continue with Google</p>
            </button>
          </span>
        </div>
      )}
    </>
  );
};

export default Home;
