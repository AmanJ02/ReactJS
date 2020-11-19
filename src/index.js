import React from 'react';
import ReactDOM from 'react-dom';

// import App from './Components/App';                       // Netflix Cards App
// import './index.css';

// import Form from './Forms/Form';                       // Login Form
// import './Forms/form.css';

// import App1 from './Slot Machine/App1';                // Slot Machine Game
// import './Slot Machine/slot.css';

// import ToDo from './ToDo List/ToDo';                   // ToDo App
// import './ToDo List/todo.css';

import IncrDecr from './Components/IncrDecr';             // Increment Decrement App
import './Components/incdec.css';


ReactDOM.render(                                                            

  // <App />,                                       // Netflix Cards App

  // <App1 />,                                      // Slot Machine Game
  
  // <Form />,                                      // Login Form

  // <ToDo />,                                     // ToDo App

  <IncrDecr />,                                   // Increment Decrement App

  document.getElementById("root")
);