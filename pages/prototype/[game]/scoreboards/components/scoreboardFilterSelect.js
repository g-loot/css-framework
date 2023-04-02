import React, { useEffect, useRef, useState } from "react";
import { DataScoreboardFilters } from "../../../../../mock-data/data-scoreboards";

export default function ScoreboardFilterSelect({ id, onLoad }) {
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
        <div className="form-group form-select">
          <label htmlFor={getScoreboardFilterByID(id).slug}>
            {getScoreboardFilterByID(id).name}:
          </label>
          <select id={getScoreboardFilterByID(id).slug} onChange={onLoad}>
            {getScoreboardFilterByID(id).items.map((item, itemIndex) => (
              <option key={itemIndex}>{item.name}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}