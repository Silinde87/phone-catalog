import Home from '../component/Home';

function HomePage() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleClick = (name) => {
    console.log('from home', name);
  };

  return <Home handleChange={handleChange} handleClick={handleClick} />;
}

export default HomePage;
