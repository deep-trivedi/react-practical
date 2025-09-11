import React from "react";

const ListPage = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Fruit List</h2>
      <ul className="list-disc pl-6 space-y-2">
        {fruits.map((fruit, index) => (
          <li key={index} className="text-lg">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
