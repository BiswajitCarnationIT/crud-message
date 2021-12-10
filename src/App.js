import logo from './logo.svg';
import './App.css';
import AddMessage from './components/AddMessage';
import ShowMessage from './components/ShowMessage';
import DeleteRecord from './components/DeleteMessage';
import UpdateMessge from './components/UpdateRecord';

function App() {
  return (
    <div>
      <h1>Messages</h1>
      <AddMessage/>
      <ShowMessage/>
      <DeleteRecord/>
      <UpdateMessge/>
    </div>
  );
}

export default App;
