import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import JumbotronStuff from './components/JumbotronStuff';
import MiddleStuff from './components/MiddleStuff';
import FooterStuff from './components/FooterStuff';

function App() {
  return (
    <div>
	    <Navbar></Navbar>
      <MiddleStuff></MiddleStuff>
      <FooterStuff></FooterStuff>
    </div>
  );
}

export default App;
