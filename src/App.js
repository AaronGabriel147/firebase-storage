import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [quotes, setQuotes] = useState([{
    author: ''
  }]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername('')
  };


  useEffect(() => {
    axios
      .get('https://thestoics.herokuapp.com/quotes/1170')
      .then(res => {
        setQuotes(res.data)
        console.log('@@@', quotes)

      })
      .catch(err => console.log(err))
  }, [])

  console.log('@@@', quotes).author

  return (
    <div className="app">
      <h1>Create Account</h1>

      <form onSubmit={submitHandler}>
        <div className="input-cont">
          <label>Username</label>
          <input
            type="username"
            placeholder="Enter username*"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password*"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>SUBMIT</button>
        </div>
      </form>


      <div className="line-separator"></div>


      <div>

        {quotes.map((quote, index) => (
          <div key={index}>
            <h2>{quote.author}</h2>
          </div>
        ))}
      </div>


      {/* {quotes.sort((a, b) => a.id - b.id).reverse().map((quote) => (
                    <div className='card-container' key={"card-container-" + quote.id}>
                        <div className="card-text">
                            <p>{quote.author}</p>
                            <p>{quote.source}</p>
                        </div>
                        <p className='quote-text'>{quote.quote}</p>
                        <div className="update-delete-buttons">


                            <Delete
                                quotes={quotes}
                                setQuotes={setQuotes}
                                id={quote.id}
                            />

                            <Update
                                quote={quote}
                                quotes={quotes}
                                setQuotes={setQuotes}
                                setFormData={setFormData}
                            />

                        </div>
                    </div>
                ))} */}





    </div >
  );
}

export default App;


