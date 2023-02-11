import { Stack } from "@mui/material";

interface IProductThumbnailProps {
  src: string;
}

const ProductThumbnail: React.FunctionComponent<IProductThumbnailProps> = ({
  src,
}) => {
  return (
    <Stack
      sx={{
        width: 156,
        height: 156,
        [`& img`]: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      }}
    >
      <img src={src} />
    </Stack>
  );
};

export default ProductThumbnail;
