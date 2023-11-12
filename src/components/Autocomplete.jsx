// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Hint } from "react-autocomplete-hint";



// export default function Autocomplete({ setFilteredData, data }) {
//     const [hintData, setHintData] = useState([]);
//     const [text, setText] = useState("");

//     // hintArray.toString('').replace(/[0-9]/g, '').split(' ').push(item.source)
//     // /\./g, ''
//     useEffect(() => {
//         axios
//             .get('https://thestoics.herokuapp.com/quotes')
//             .then((res) => {
//                 let hintArray = [];
//                 res.data.map((item) => {
//                     hintArray.push(item.author)
//                     hintArray.push(item.source.replace(/[0-9]/g, ''))
//                 });
//                 console.log('$$$', hintArray)
//                 setHintData(hintArray.map(x => x.replace(/[^a-zA-Z0-9 ]/g, '')));
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     return (
//         <div className="app">
//             <h1>Auto complete</h1>
//             <code>{`[${hintData.toString()}]`}</code>

//             <Hint options={hintData} allowTabFill>
//                 <input
//                     className="input-with-hint"
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                 />
//             </Hint>
//         </div>
//     );
// }

