import React, { useEffect, useRef, useState } from "react";
import { DataScoreboardFilters } from "../../../../../mock-data/data-scoreboards";

export default function ScoreboardFilter(props) {
  const id = props.item.id || 0;
  const value = props.item.value || 0;

  console.log(props.item, value);

  const getScoreboardFilterByID = (id) => {
    return DataScoreboardFilters.find((filter) => {
      return filter.id === parseInt(id);
    });
  };

  return (
    <>
      <li>
        <span className="text-ui-400">{getScoreboardFilterByID(id).name}:</span>
        <span className="text-main">
          {getScoreboardFilterByID(id).items.map((item, itemIndex) => (
            <>{value === item.id && <>{item.name}</>}</>
          ))}
        </span>
      </li>
    </>
  );
}
