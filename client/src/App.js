import "./App.css";
import AddBook from "./components/AddBook";
import ShowBook from "./components/ShowBook";

function App() {
  return (
    <div className='bg-gray-100'>
      <AddBook />
      
      <ShowBook />
    </div>
  );
}

export default App;
