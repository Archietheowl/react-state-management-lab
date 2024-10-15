// src/App.jsx
import './App.css';

const team = []
const money = 100
const zombieFighters = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

const App = () => {
  {zombieFighters.map((fighter) => (
      <fighter key={fighter.name}/>
      
  ))}
  const handleAddFighter = (fighter) => {
    
    console.log("testing")
  }

  return (
    <>
      <h1>Zombie Apocolypse Game</h1>
      <h2>Money: { money } </h2>
      <h2>Team Strength: </h2>
      <h2>Team Agility: </h2>
      <h2>Team </h2>
      <p>Pick some team members</p>
      <h2>Fighters</h2>
      <div className='fightersContainer'>
        
        {zombieFighters.map((fighter) => (
          <div className='fighters'>  
            
            <ul>
              <li><img src={fighter.img} alt="" /></li>
              <li>{fighter.name}</li>
              <li>Price {fighter.price}</li>
              <li>Stength {fighter.strength}</li>
              <li>Agility {fighter.agility}</li>
            </ul>
            <button onClick={() => handleAddFighter}>Add To Team</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
