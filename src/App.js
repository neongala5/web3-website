import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import JumbotronStuff from './components/JumbotronStuff';
import ProductFeatures from './components/ProductFeatures/ProductFeatures';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';


function App() {
  
  return (
    <div>
      <Navbar></Navbar>
	    <JumbotronStuff></JumbotronStuff>
      <ProductFeatures></ProductFeatures>
      <Team></Team>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}

export default App;
