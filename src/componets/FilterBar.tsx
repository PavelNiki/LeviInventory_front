import { FC } from "react";

const FilterBar: FC = ({ children }) => {
  return (
    <div
      className="filter-bar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {children}
    </div>
  );
};
export default FilterBar;
