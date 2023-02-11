import { Stack, alpha } from "@mui/system";
import * as React from "react";
import ProductPrice from "../common/price";
import ProductRate from "../common/rate";
import ProductThumbnail from "../common/thumbnail";
import ProductTitle from "../common/title";

interface IHorizontalProductCardProps {
  item: any;
}

const HorizontalProductCard: React.FunctionComponent<
  IHorizontalProductCardProps
> = ({ item }) => {
  return (
    <Stack
      direction="row-reverse"
      alignItems={"center"}
      p={1}
      sx={{
        border: "1px solid",
        borderColor: (t) => alpha(t.palette.common.black, 0.12),
        boxShadow: " 0px 0px 3px 2px rgb(0 0 0 / 4%)",
        borderRadius: "1rem",
        backgroundColor: "#161616",
      }}
      spacing={1.5}
    >
      <ProductThumbnail src={item.image} />
      <Stack alignItems="flex-end" spacing={1}>
        <ProductTitle title={item.title} />
        <ProductRate rate={item.rate} />
        <ProductPrice price={item.price} />
      </Stack>
    </Stack>
  );
};

export default HorizontalProductCard;
