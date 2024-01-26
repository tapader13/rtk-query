import './App.css';
import CreateUser from './pages/CreateUser';
import DeleteUser from './pages/DeleteUser';
import GetAllData from './pages/GetAllData';
import GetSpecificUser from './pages/GetSpecificUser';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <div className='App'>
      <GetAllData />
      <GetSpecificUser />
      <DeleteUser />
      <UpdateUser />
      <CreateUser />
    </div>
  );
}

export default App;
