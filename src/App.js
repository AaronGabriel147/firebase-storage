import './App.css';


export default function App() {


  return (
    <div className="app">
      <h1>CSS RESET</h1>
      <h2>&</h2>

      <p>Custom styling.</p>
      <div className="border"></div>
      <div class="input-cont">
        <label>Name</label>
        <input type="input" placeholder="Name*" name="name" id='name' required />
      </div>
      <button>Submit</button>
    </div >
  );
}


