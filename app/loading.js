import { CircularProgress } from "@mui/material";
import "./loading.css";
export default function Loading() {
  return (
    <div className="column center middleware-height">
      <CircularProgress />
    </div>
  );
}
