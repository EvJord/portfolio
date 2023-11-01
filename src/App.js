import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from "./Home"
import Counter from "./Counter";
import QuizApp from "./QuizApp"
import Calculator from './Calculator';
import TodoApp from './TodoApp';
import WeatherApp from './WeatherApp';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <nav>
            <div className='angies-projekte'>
               <h1 >Angie's Projekte</h1>
            </div> 
            <div className='nav-links'> 
              <NavLink to="/">Home</NavLink>
              <NavLink to="TodoApp">To Do</NavLink>
              <NavLink to="Counter">Zähler</NavLink>
              <NavLink to="QuizApp">Quiz</NavLink>
              <NavLink to="Calculator">Rechner</NavLink>
              <NavLink to="WeatherApp">Wetter App</NavLink>
            </div> 
          </nav>
        </header>
        <main> 
          <Routes> 
              <Route index element={<Home />} />
              <Route path="TodoApp" element={<TodoApp />} />
              <Route path="Counter" element={<Counter />} />
              <Route path="QuizApp" element={<QuizApp />} />
              <Route path="Calculator" element={<Calculator />} />
              <Route path="WeatherApp" element={<WeatherApp />} />
          </Routes>
        </main> 
      </div>
    </BrowserRouter>
  );

}

export default App;
