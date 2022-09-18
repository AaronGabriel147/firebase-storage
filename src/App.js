import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from './components/Form.jsx';
import TableHead from './components/TableHead';


function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    author: "",
    source: "",
    quote: ""
  });


  // https://jsonplaceholder.typicode.com/posts
  useEffect(() => {
    axios
      .get('https://thestoics.herokuapp.com/quotes')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])


  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      axios
        .delete(`https://thestoics.herokuapp.com/quotes/${id}`)
        .then(res => {
          setData(data.filter(item => item.id !== id));
        })
        .catch(err => console.log(err));
    }
  }


  return (
    <div className="app">
      <h1>FYC</h1>
      <Form data={data} setData={setData} formData={formData} setFormData={setFormData} />
      <table>
        <TableHead />
        <tbody>
          {data.sort((a, b) => a.id - b.id).reverse().map((item) => (
            <tr key={item.id}>
              {/* {console.log('### Map', item)} */}
              <td>{item.author}</td>
              <td>{item.source}</td>
              <td>{item.quote}</td>
              <td><button id="delete-btn" onClick={() => deleteHandler(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default App;