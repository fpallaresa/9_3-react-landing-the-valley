import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainMessage from './components/mainMessage/MainMessage';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainMessage
        titleh1="Ejercicio React"
        titleh2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Footer year="2022"/>
    </div>
  );
}

export default App;
