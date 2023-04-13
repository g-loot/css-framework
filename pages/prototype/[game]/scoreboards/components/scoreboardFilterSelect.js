import React, { useEffect, useRef, useState } from "react";
import { DataScoreboardFilters } from "../../../../../mock-data/data-scoreboards";
import Select, { components, GroupHeadingProps } from "react-select";


export default function ScoreboardFilterSelect({ id, item, onLoad }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    setSelectedFilter(getScoreboardFilterByID(id));
  }, [id]);

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



const colourOptions = [
  { value: "ocean", label: "Ocean"},
  { value: "blue", label: "Blue"},
  { value: "purple", label: "Purple"},
  { value: "red", label: "Red"},
  { value: "orange", label: "Orange"},
  { value: "yellow", label: "Yellow"},
  { value: "green", label: "Green"},
  { value: "forest", label: "Forest"},
  { value: "slate", label: "Slate"},
  { value: "silver", label: "Silver"},
];

const flavourOptions = [
  { value: "vanilla", label: "Vanilla"},
  { value: "chocolate", label: "Chocolate"},
  { value: "strawberry", label: "Strawberry"},
];
const groupedOptions = [
  {
    label: "Colours",
    options: colourOptions,
  },
  {
    label: "Flavours",
    options: flavourOptions,
  },
];


  const GroupHeading = (props) => (
    <div
      className={`${
        props.label === "Flavours" ? "bg-ui-100" : "text-premium-500"
      }`}
    >
      <components.GroupHeading {...props} />
    </div>
  );

  return (
    <>
      {selectedFilter && (
        <>
          <div className="form-group form-select">
            <label htmlFor={getScoreboardFilterByID(id).slug}>
              {getScoreboardFilterByID(id).name}:
            </label>
            
            {/*
            <select id={getScoreboardFilterByID(id).slug} onChange={onLoad}>
              {getScoreboardFilterByID(id).items.map((item, itemIndex) => (
                <option key={itemIndex}>{item.name}</option>
              ))}
            </select>
            */}

            <Select
              options={getScoreboardFilterByID(id).sections}
              components={{ GroupHeading }}
              defaultValue={{ label: getFilteroptionByID(item.section, item.value).label, value: getFilteroptionByID(item.section, item.value).id }}
              className="react-select-container"
              classNamePrefix="react-select"
              menuPortalTarget={document.body}
              onChange={onLoad}
              NOmenuIsOpen={true}
            />
          </div>
        </>
      )}
    </>
  );
}
