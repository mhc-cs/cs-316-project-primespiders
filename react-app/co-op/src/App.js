import logo from './logo.svg';
import './App.css';

// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'MKprime',
//   password: 'sp1d3r',
//   database: 'mysql_coop',
// });
// // Make the connection
// connection.connect(function (err) {
//   // Check if there is a connection error
//   if (err) {
//       console.log("connection error", err.stack);
//       return;
//   }

//   // If there was no error, print this message
//   console.log(`connected to database`);
// });


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
