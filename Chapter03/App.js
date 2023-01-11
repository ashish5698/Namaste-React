import React from "react";
import ReactDOM from "react-dom/client";
import userLogo from './user-logo.jpeg';
import reactLogo from './namaste-react-logo.png';

/*
Using React.createElement
const header = React.createElement(
    "h1",
    {
      id: "heading",
    },
    "Heading 1"
  );
  const header1 = React.createElement(
    "h2",
    {
      id: "sub-heading",
    },
    "Heading 2"
  );
  const header2 = React.createElement(
    "h3",
    {
      id: "sub-sub-heading",
    },
    "Heading 3"
  );
  const container = React.createElement(
    "div",
    {
      className: "title",
    },
    [header, header1, header2]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
  */

/*
Using JSX

const container = 
<div className='title'>
  <h1 id='heading'>Heading 1</h1>
  <h2 id='sub-heading'>Heading 2</h2>
  <h3 id='sub-sub-heading'>Heading 3</h3>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
*/

/*
Using Functional Components

const Container = () => {
return (<div className='title'>
  <h1 id='heading'>Heading 1</h1>
  <h2 id='sub-heading'>Heading 2</h2>
  <h3 id='sub-sub-heading'>Heading 3</h3>
</div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
*/

/*
Pass attributes into the tag in JSX

const title = <h1 id='heading'>Heading 1</h1>

const Container = () => {
  return (<div className='title'>
    {title}
    <h2 id='sub-heading'>Heading 2</h2>
    <h3 id='sub-sub-heading'>Heading 3</h3>
  </div>);
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Container />);
  */

/*
Composition of a component inside another

const Title = () => { return <h1 id='heading'>Heading 1</h1> }

const Container = () => {
  return (<div className='title'>
    {Title()}
    <h2 id='sub-heading'>Heading 2</h2>
    <h3 id='sub-sub-heading'>Heading 3</h3>
  </div>);
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Container />);
  */

/*
Create a header component from scratch using functional components with JSX
*/

const HeaderComponent = () => {
  return (
    <div className="container">
      <a href="/">
      <img
        src={reactLogo}
        alt="logo"
        className="logo"
        style={{ height: "50px", width: "50px" }}
      ></img>
      </a>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className="search-box"
        ></input>
        <button className="submit-button" type="submit">Search</button>
      </div>
      <img
        src={userLogo}
        alt="user"
        className="user-logo"
        style={{ height: "50px", width: "50px" }}
      ></img>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
