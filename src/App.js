import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import Component from './Component';
import ClassComponent from './ClassComponent';
import JSX from './JSX';
import EventFunction from './EventFunction';
import stateClass from './stateClass';
import Props from './Props';
import PropsClass from './PropsClass';
function App() {
    let data = "M.S.Dhoni";
    function User() {
        data = "Virat Kohli";
        alert(data);
    }
    function Apple() {
        return (<div>Apple Component</div>);
    }

    const [data2, setData] = useState("M.S.Dhoni");
    function UpdateData() {
        setData("Virat Kohli");
    }

    return (
        // 1st example
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>

        // 2nd Example : Here we are reusing the code using components.
        // This we are creating differnt file and than import otherwise we need to create here function.
        // <div className="App">
        //   <Component />
        //   <Component />
        //   <Component />
        //   <Component />
        // </div>

        // 3rd example: ClassComponent
        // Component inside the component. Ex: Apple
        // <div className="App">
        //     <ClassComponent />
        //     <ClassComponent />
        //     <Apple />        
        // </div>

        // 4th example: JSX => JavaScript XML
        // <div className="App">
        //     <JSX />
        // </div>

        // 5th example: Event and Function
        // <div className="App">
        //     <h1>Event Function Example</h1>
        //     <h1> {data} </h1>
        //     <button onClick={ () => alert("Hello User") }>Click Me 1</button>
        //     <button onClick={ User }>Click Me 2</button>
        // </div>

        // 6th example: State function component
        // <div className="App">
        //     <h1>State Function Component</h1>
        //     <h1> {data2} </h1>
        //     <button onClick={ UpdateData }>Update Data</button>
        // </div>

        // 7th example: State in class component
        // <div className="App">
        //     <stateClass />
        // </div>

        // 8th example: props(properties) with functional component
        // <div className="App">
        //     <Props name={"virat"} />
        //     <Props name={"Anuska"} />
        //     <Props name={"Salman"} />
        //     <Props name={"Salman"} email={"sallu@gmail.com"} />
        // </div>

        // 9th example: props with class component
        <div className="App">
            <h1>Props with Class Component :)</h1>
            <PropsClass name="Ronaldo" email="cr7@gmail.com" />

        </div>
  );
}

export default App;
