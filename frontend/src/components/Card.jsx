import React, { useState, useEffect } from "react";

const Card = ({ title, imageUrl, description, date }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the API (if necessary)
    fetch('') // Replace with your API URL
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="flex flex-col w-full max-w-md bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || "https://via.placeholder.com/400x200"} // Fallback image
          alt="Card Image"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">{title ? title : 'No Title Found'}</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description ? description:"No description"}</p>

        {/* Location and Date */}
        <div className="flex justify-between text-sm text-gray-500">
          
          <span>{date? data: "no date"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
