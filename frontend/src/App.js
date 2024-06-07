import logo from './logo.svg';
import './App.css';
import Stepper from './Components/Stepper';
import Navbar from './Components/Navbar';

function App() {
  const divStyle = {
    backgroundImage:`url(${
      process.env.PUBLIC_URL + "/images/bg-2.jpg"
  })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
};
  return (
    <div style={divStyle}>
      <Navbar />
      <Stepper />
    </div>
  );
}

export default App;
