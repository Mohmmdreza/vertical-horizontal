import { Typography } from "@mui/material";
import * as React from "react";

interface IProductTitleProps {
  title?: string;
}

const ProductTitle: React.FunctionComponent<IProductTitleProps> = ({
  title,
}) => {
  return (
    <Typography variant="smallBold" textAlign="right">
      {title}
    </Typography>
  );
};

export default ProductTitle;
