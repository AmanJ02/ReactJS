import React, { useState } from 'react';
import Card from './Cards';
import Data from './Data';


const App = () => (
  <>
    <h1 className = "heading_style"> List of Top 5 Indian Web Series in 2020 </h1>
    {Data.map((val) => {
      return(
        <Card
          key={val.id} 
          imgsrc = {val.imgsrc}
          title= {val.title}
          sname = {val.sname}
          link= {val.links}
        />
      );
    })}
  </>
);

//--------------------------------------------------------------------

// const App = () => {

//   const purple = "#8e44ad";
//   const [bg, setBg] = useState(purple);
//   const [name, setName] = useState('Click Me');

//   const bgChange = () => {
//     let newBg = '#34495e';
//     let newName = 'Hola 🤝';
//     setBg(newBg);
//     setName(newName);
//   };

//   const bgBack = () => {
//     setBg(purple);
//     setName("Stop 🛑");
//   };
//   return (
//     <>
//     <div style = { { backgroundColor: bg }}>
//       <button onClick={bgChange} onDoubleClick={bgBack}> 
//         {name} 
//       </button>
//     </div>
//     </>
//   );
// };

export default App;