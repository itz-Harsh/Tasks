import './index.css';
import Home from './pages/Home';
import { useAuth } from './context/authContext';

function App() {
  const { currentUser } = useAuth();
  localStorage.setItem("token" , currentUser ?  currentUser.accessToken : "" );
return (
  <div className="App">
    <Home />
  </div>
  )
}

export default App;
