import { InputLabel, MenuItem, Select } from "@mui/material";
import "./toolsBar.css";
export default function ToolsBar({ sortBy, setSortBy, setSearch }) {
  return (
    <div className="row toolsBar">
      <div>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={sortBy}
          onChange={(e) => setSortBy(parseInt(e.target.value))}
        >
          <MenuItem value={0}>name asc</MenuItem>
          <MenuItem value={1}>name des</MenuItem>
          <MenuItem value={2}>price asc</MenuItem>
          <MenuItem value={3}>price des</MenuItem>
        </Select>
      </div>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
