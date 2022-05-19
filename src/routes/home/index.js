import PhoneService from './../../services/PhoneService';
function Home() {
  const handleClick = () => {
    PhoneService.getAllPhones()
      .then((res) => {})
      .catch((error) => {});
  };
  return (
    <div>
      <div>React App Template</div>
      <button onClick={handleClick}>Get phones</button>
    </div>
  );
}

export default Home;
