import logo from './logo.svg';
import './App.css';
import WeatherFetch from './components/WeatherFetch/WeatherFetch';

function App() {
  return (
    <div className="App">
      <WeatherFetch />
      <div className='footer'>
          <p>Created By Saurabh Jaiswal</p>
        </div>
    </div>
  );
}

export default App;
