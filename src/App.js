import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  // const increment = () => setCount(count + 1)
  // const AddtoCart() = () => setCart(cart + item)
  const [count, setCount] = useState(0); 
  const [ cart, setCart] =useState([]);

  

  const AddtoCart=(item) => { 
    console.log(item)
    console.log(cart)
    setCount(count + 1)
    setCart([...cart,item.name]);
        

      }

    


      
    

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( 
        
        <div class="card"> 
        <div key={index}>
          <p>
          <h2> {item.name}</h2>
          <p1> {item.description} </p1>
          <p2> {item.price}</p2>
           </p>
           <img src={item.image}/>
           <button onClick={ () => AddtoCart(item)}> Add to Cart</button>
          </div> 
          </div>
      ))}

      <div>
        
        <h2>Cart</h2>
        
        {count}
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>{cartItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
