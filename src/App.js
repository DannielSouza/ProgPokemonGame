import './App.css';
import Screen from './Components/Screen';
import mobile from './assets/phone.png'
import rotate from './assets/rotate.png'

function App() {
  return (
    <div className="App">
      <Screen/>
      <section className='mobileView'>
        <div className='iconContainer'>
          <img className='phoneIcon' src={mobile} alt="celular" />
          <img className='rotateIcon' src={rotate} alt="rotacionar" />
          <div className='mobileMessage'>
            <p>Por favor, vire o celular.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
