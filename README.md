Blank React template with all the useless things deleted and some starter CSS added. 


// <th>  is a table header, the bolded text on the top of the table.
// <td>  is a table data, the text in the table.
// <tr>  is a table row, the text in the table.
// <table>  is a table, the table itself.

// <thead>  is a table head, the text in the table.
// <tbody>  is a table body, the text in the table.
// The <tbody> tag is used to group the body content in an HTML table.
// The <tbody> element is used in conjunction with the <thead> and <tfoot> elements to specify each part of a table (body, header, footer).




// {JSON.stringify(data)} 
// {console.log('@@@', data)} 

      {data.map((item, index) => (
        <div key={item.id}>
          {/* <p>{item.author}</p> */}
          {JSON.stringify(item.source)}
        </div>
      ))}