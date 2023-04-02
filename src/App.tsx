import './App.css';
import { ListingSlider } from './components/ListingSlider/ListingSlider';
import { Header } from './components/Header/Header';
import { app, auth } from './firebase';

function App() {
  return (
    <div className="App">
      <Header />
      <ListingSlider />
    </div>
  );
}

export default App;
