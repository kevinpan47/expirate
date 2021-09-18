import './App.css';
import FoodProgress from './components/Food/foodProgress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FoodProgress
          name={"Kimchi"}
          buyDate={"10/2/21"}
          useDate={"12/21/21"}
          progress={75}
        />
      </header>
    </div>
  );
}

export default App;
