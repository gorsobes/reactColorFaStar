import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function Color({ title, color, rating }) {
  const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );
  const createArray = (length) => [...Array(length)];
  function StarRating({ style = {}, totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
      <div style={{ padding: "35px", ...style }}>
          
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
              
        <p>
                  {selectedStars} of {totalStars} stars        
        </p>
            
      </div>
    );
  }
  return (
    <section>
            <h1>{title}</h1>
            
      <div style={{ height: 50, backgroundColor: color }} />
           
      <StarRating selectedStars={rating} />
          
    </section>
  );
}
