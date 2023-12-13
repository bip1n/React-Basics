import './App.css';

function App() {
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
}

export default App;
