import React, { useEffect, useRef, useState } from "react";
import { DataScoreboardFilters } from "../../../../../mock-data/data-scoreboards";

export default function ScoreboardFilter({id, value}) {

  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    setSelectedFilter(getScoreboardFilterByID(id));
  }, [id]);


  const getScoreboardFilterByID = (id) => {
    return DataScoreboardFilters.find((filter) => {
      return filter.id === parseInt(id);
    });
  };

  return (
    <>
      {selectedFilter && (
        <li>
          <span className="text-ui-400">
            {getScoreboardFilterByID(id).name}:
          </span>
          <span className="text-main">
            {getScoreboardFilterByID(id).items.map((item, itemIndex) => (
              <>{value === item.id && <>{item.name}</>}</>
            ))}
          </span>
        </li>
      )}
    </>
  );
}
