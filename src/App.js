import "./App.css";
import { useState } from "react";
import data from "./mock-data.json";


// <th>  is a table header, the bolded text on the top of the table.
// <td>  is a table data, the text in the table.
// <tr>  is a table row, the text in the table.
// <table>  is a table, the table itself.

// <thead>  is a table head, the text in the table.
// <tbody>  is a table body, the text in the table.
// The <tbody> tag is used to group the body content in an HTML table.
// The <tbody> element is used in conjunction with the <thead> and <tfoot> elements to specify each part of a table (body, header, footer).

function App() {
  const [contacts, setContacts] = useState(data);


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('@@')
  }

  return (
    <div className="app">
      {/* Form. */}
      <form onSubmit={submitHandler}>
        <h2>Add Contact</h2>
        <div className="input-cont">

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={contacts.fullName}
            onChange={(e) => setContacts(e.target.value)}
          />

          <label>Adress</label>
          <input
            type="text"
            name="address"
            placeholder="Address*"
          // onChange={ }
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number*"
          // onChange={ }
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email*"
          // onChange={ }
          />

          <button>SUBMIT</button>
        </div>
      </form>

      <table>
        {/* After table head tags we will create the table body. */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>

        {/* Table body. */}
        <tbody>
          {contacts.map((item, index) => (
            <tr key={index}>
              <td>{item.fullName}</td>
              <td>{item.address}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default App;


