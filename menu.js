import React, { useEffect, useState } from 'react';
import './menu.css';
import pic from './refrigerator.png';
const MenuPage = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    // Fetch menu data from API
    fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      .then(response => response.json())
      .then(data => setMenuData(data));
  }, []);
  
  const stylee = {float: "right" , 
 height: "120px",
width: "120px"};
const stee = { 
 height: "40px",
width: "40px"};
const stye = {
 height: "150px",
width: "150px"};

  return (
    

    <div>
    <h2>Select Dishes</h2>
              
      {menuData ? (
        <div>
          
        <span className ="tme">{new Date().toLocaleString("en-US", { day : '2-digit'})}
          &nbsp;
          {new Date().toLocaleString("en-US", { month: "long" })}
          &nbsp;{new Date().getFullYear()}</span>
          <span className = "dte">10:30pm - 12:30pm</span><br/>
          <div className = "topp">
          <span className = "tpp">Italian</span>
          <span className = "tpp">Indian</span>
          <span className = "tpp">Indian</span><span>Indian</span>
          </div>
          <h3>Popular Dishes</h3>
          <ul className = "imge">
            {menuData.popularDishes.map(dish => (
              <div className = "head-text">
        <div className = "head-image">
        <ul  ><li className = "imm"><img style = {stye} className = "imgee" src={dish.image} alt={dish.name} /></li></ul>
        </div>
        <div className="center__text">
        <h4>{dish.name}</h4>
        </div>
</div>
              
            ))}
          </ul>
          <ul>
            {menuData.dishes.map(dish => (
              <li key={dish.id}>
                <img style={stylee} src={dish.image} alt={dish.name} />
                <h4>{dish.name}   <span className="rate">  {dish.rating}&#9733;</span></h4>
                <img style={stee} src= {pic} /><img style={stee} src= {pic} /> <span ><a> Ingredients </a></span>
                <p>{dish.description}</p>
                
              </li>
            ))}
          </ul>

          
        </div>
      ) : (
        <p>Loading menu...</p>
      )}
    </div>
  );
};

export default MenuPage;
