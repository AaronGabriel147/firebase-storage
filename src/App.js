import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from './components/Form';
import TableHead from './components/TableHead';
// import Autocomplete from "./components/Autocomplete";


function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    author: "",
    source: "",
    quote: ""
  });
  // const [filteredData, setFilteredData] = useState([]);


  // https://jsonplaceholder.typicode.com/posts
  // .get("https://jsonplaceholder.typicode.com/users")
  useEffect(() => {
    axios
      // .get('https://thestoics.herokuapp.com/quotes')
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setData(res.data);
        // console.log('@@@@', res.data);
      })
      .catch(err => console.log(err));
  }, []);


  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      axios
        // .delete(`https://thestoics.herokuapp.com/quotes/${id}`)
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setData(data.filter(item => item.id !== id)))
        .catch(err => console.log(err));
    }
  }


  return (
    <div className="app">
      {/* <Autocomplete filteredData={filteredData} setFilteredData={setFilteredData} data={data} /> */}
      <h1>Table</h1>
      <Form data={data} setData={setData} formData={formData} setFormData={setFormData} />
      <table>
        <TableHead />
        <tbody>
          {data.sort((a, b) => a.id - b.id).reverse().map((item) => (
            <tr key={item.id}>
              {console.log('### Map', item)}
              {/* <td>{item.author}</td>
              <td>{item.source}</td>
              <td>{item.quote}</td> */}

              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td><button id="delete-btn" onClick={() => deleteHandler(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default App;