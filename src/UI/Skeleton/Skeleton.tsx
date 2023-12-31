import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

interface ISkeleton {
  count: number;
}

const SkeletonUI: React.FC<ISkeleton> = ({ count = 8 }) => {
  const skelet = new Array(count).fill(null);

  return (
    <div className="listGrid">
      {skelet.map((_, index) => (
        <Box
          key={index}
          sx={{
            pt: 0.5,
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
            padding: 1,
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          <Skeleton variant="rectangular" height={140} />
          <Skeleton height={60} />
          <Skeleton />
          <Skeleton width="80%" />
          <Skeleton width="60%" />
          <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
            <Skeleton
              width="40%"
              height={40}
              sx={{ display: "inline-block" }}
            />
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ display: "inline-block" }}
            />
          </Stack>
        </Box>
      ))}
    </div>
  );
};

export default SkeletonUI;
