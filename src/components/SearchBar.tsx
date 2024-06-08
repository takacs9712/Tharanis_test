import React from "react";
import { FormControl } from "react-bootstrap";

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <FormControl
      type="text"
      placeholder="Keresés..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
