import PhoneService from './../../services/PhoneService';
function Home() {
  const handleClick = () => {
    PhoneService.getAllPhones()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button onClick={handleClick}>Get phones</button>
    </div>
  );
}

export default Home;
