import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import JumbotronStuff from './components/JumbotronStuff';
import MiddleStuff from './components/MiddleStuff';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <div>
      <Navbar></Navbar>
	    <JumbotronStuff></JumbotronStuff>
      <MiddleStuff></MiddleStuff>
      <Footer></Footer>
    </div>
  );
}

export default App;
