import { alpha, Stack } from "@mui/material";
import * as React from "react";
import ProductPrice from "../common/price";
import ProductRate from "../common/rate";
import ProductThumbnail from "../common/thumbnail";
import ProductTitle from "../common/title";

interface IVerticalProductCardProps {
  item: any;
}

const VerticalProductCard: React.FunctionComponent<
  IVerticalProductCardProps
> = ({ item }) => {
  return (
    <Stack
      alignItems="center"
      spacing={2}
      p={1}
      sx={{
        border: "1px solid",
        borderColor: (t) => alpha(t.palette.common.black, 0.12),
        boxShadow: " 0px 0px 3px 2px rgb(0 0 0 / 4%)",
        borderRadius: "1rem",
        backgroundColor: "#161616",
        minHeight: 374,
      }}
    >
      <ProductThumbnail src={item.image} />
      <ProductTitle title={item.title} />
      <ProductRate rate={item.rate} />
      <ProductPrice price={item.price} />
    </Stack>
  );
};

export default VerticalProductCard;
