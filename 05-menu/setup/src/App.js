import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from "./data";
const allCategories = ['all', ...new Set(items.map((item)=>(item.category)))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const[categories,setCategories] = useState(allCategories);

  const filterItems = (categories) =>{

    if(categories === "all"){ 
      setMenuItems(items);
      return
    };
    const newItems = items.filter((item)=> item.category === categories)
    setMenuItems(newItems)

  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} category={categories}/>
          <Menu items={menuItems}/>
        </div>
      </section>
    </main>
  )
}

export default App;
