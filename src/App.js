import './App.css';
import Cards from './Components/Cards/Cards';
import MainCard from './Components/MainCard/MainCard';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainCard />
      <Cards title="discover" category="discover" language="language=en-US" />
      <Cards title="History" category="discover" genres="with_genres=36"/>
      <Cards title="Action" category="discover" genres="with_genres=28" />
      <Cards title="Animation" category="discover" genres="with_genres=16"/>
      <Cards title="Comedy" category="discover" genres="with_genres=35" />
      <Cards title="Drama" category="discover" genres="with_genres=18"/>
      <Cards title="Family" category="discover" genres="with_genres=10751"/>
      <Cards title="Fantasy" category="discover" genres="with_genres=14" />   
      <Cards title="Thriller" category="discover" genres="with_genres=53" />  
      <footer className='h-[50px] mt-[20px] font-mono text-center dark:text-white'>
        <span>© hello_world.ttj</span>
      </footer>
    </div>
  );
}

export default App;
