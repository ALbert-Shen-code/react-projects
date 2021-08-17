import React from 'react';

const Categories = ({filterItems, category}) => {
  return<div className="btn-container">
    {category.map((cate)=>(
      <button className="filter-btn" onClick={()=>filterItems(cate)}>{cate}</button>
    ))}

  </div>;
};

export default Categories;
