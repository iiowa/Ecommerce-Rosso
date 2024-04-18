import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a "Iowa Store"'}/>
    </div>
  );
}

export default App;
