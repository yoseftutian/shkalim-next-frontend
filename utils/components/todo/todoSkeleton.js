import Skeleton from "@mui/material/Skeleton";

export default function TodoSkeleton() {
  return (
    <div className="column center" style={{ height: "85vh" }}>
      <div className="row center" style={{ width: "400px", gap: "20px" }}>
        <Skeleton width={200} height={100} />
        <Skeleton variant="circular" width={48} height={48} />
      </div>
    </div>
  );
}