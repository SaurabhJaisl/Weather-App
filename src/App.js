import './App.css';
import WeatherFetch from './components/WeatherFetch/WeatherFetch';

function App() {
  return (
    <div className="App">
      <WeatherFetch />
      <div className='footer'>
          <p>Created By <b>Saurabh Jaiswal</b></p>
      </div>
    </div>
  );
}

export default App;
