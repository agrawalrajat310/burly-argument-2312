import React, { useEffect, useState } from "react";

import AddItem from "./AddItem";

function HomePage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      let _list = [];

      for (let i = 0; i < 12; i++) {
        _list.push(<AddItem placeholder={true} />);
      }

      setList(_list);
    }
  }, list);

  return <div className="home-page flex">
    
    <div className="add-list flex">
    {list}


    </div>
    <button className="load-more fontr c333">


Load More
    </button>
    </div>
}

export default HomePage;
