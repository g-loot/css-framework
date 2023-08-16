import React, { useEffect, useRef, useState } from "react";
import { DataScoreboardFilters } from "@/mock-data/data-scoreboards";

export default function ScoreboardFilter({item}) {

  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    setSelectedFilter(getScoreboardFilterByID(item.id));
  }, [item]);

  const getScoreboardFilterByID = (id) => {
    return DataScoreboardFilters.find((filter) => {
      return filter.id === parseInt(id);
    });
  };

  const getFiltersectionByID = (sectionID) => {
    const selectedSection = selectedFilter.sections.find(section => {
      return section.id === parseInt(sectionID);
    });
    return selectedSection;
  };
  
  const getFilteroptionByID = (sectionID, optionID) => {
    const selectedFiltersection = getFiltersectionByID(sectionID);
    const selectedOption = selectedFiltersection.options.find(option => {
      return option.id === parseInt(optionID);
    });
    return selectedOption;
  };

  return (
    <>
      {selectedFilter && (
        <li className="chip chip-secondary chip-sm">
          <span>
            <span className="text-ui-400">
              {selectedFilter.name}:
            </span>
            <span className="text-ui-200">
              {getFilteroptionByID(item.section, item.value).label}
            </span>
          </span>
        </li>
      )}
    </>
  );
}
