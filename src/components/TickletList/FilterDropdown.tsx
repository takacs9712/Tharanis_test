import React from "react";
import { Dropdown } from "react-bootstrap";

interface FilterDropdownProps {
  filter: string;
  onFilterChange: (newFilter: string | null) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <Dropdown onSelect={onFilterChange}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {filter === "all"
          ? "All"
          : filter.charAt(0).toUpperCase() + filter.slice(1)}{" "}
        Hibajegy
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="Összes">Összes</Dropdown.Item>
        <Dropdown.Item eventKey="olvasott">Olvasott</Dropdown.Item>
        <Dropdown.Item eventKey="olvasatlan">Olvasatlan</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropdown;
