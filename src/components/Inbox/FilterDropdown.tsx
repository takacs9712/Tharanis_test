import React from "react";
import { Dropdown } from "react-bootstrap";

interface FilterDropdownProps {
  handleFilterChange: (selectedFilter: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  handleFilterChange,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Szűrés
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleFilterChange("all")}>
          Minden üzenet
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterChange("olvasott")}>
          Olvasott üzenetek
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterChange("olvasatlan")}>
          Olvasatlan üzenetek
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropdown;
