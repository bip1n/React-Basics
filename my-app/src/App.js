import './App.css';

function App() {
  /*
  const name = 'Josh Perez';
  const isMale=false;

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>
    } return <h1>Hello, Stranger.</h1>

  }
  return (
    <div className="App">
      {getGreeting('')};
      <h2>You are a {isMale? 'Male':'Female'}</h2>
    </div>
  );
  */

  //BEM naming convention
  // BEM Stands for Block Element Modifier
    return(
      <div className="app">
        <h1 className = "app__title">This is a title.</h1>
        <h2 className = "app__title--large">This is a large title.</h2>
        <h2 className = "app__title--small">This is a small title.</h2>
    
      </div> 
    );
  }
export default App;
