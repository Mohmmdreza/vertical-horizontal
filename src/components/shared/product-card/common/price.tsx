import { Typography } from "@mui/material";
import * as React from "react";

interface IProductPriceProps {
  price: number;
}

const ProductPrice: React.FunctionComponent<IProductPriceProps> = ({ price }) => {
  return (
    <Typography variant="smallRegular">
      {price.withCommas().withPriceUnit()}
    </Typography>
  );
};

export default ProductPrice;
