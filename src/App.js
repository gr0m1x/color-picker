import './App.css';
import ColorPicker from "./ColorPicker/ColorPicker";

function App() {
  return (
    <div className="App">
      <ColorPicker/>
      <svg className="sprite">
        <symbol id="icon__arrow-down" viewBox="0 0 213.333 213.333">
	        <polygon points="0,53.333 106.667,160 213.333,53.333 		"/>
        </symbol>
      </svg>
    </div>
  );
}

export default App;
