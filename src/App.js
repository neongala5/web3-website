import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import JumbotronStuff from './components/JumbotronStuff';
import MiddleStuff from './components/MiddleStuff';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';

function App() {
  return (
    <div>
      <div style={{ backgroundImage: 'linear-gradient(to bottom right, rgba(255,0,0,0),rgba(0,255,255,.2)' }}>
        <Navbar></Navbar>
        <JumbotronStuff></JumbotronStuff>
      </div>
      <MiddleStuff></MiddleStuff>
      <Team></Team>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}
export default App;