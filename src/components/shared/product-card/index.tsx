import * as React from "react";
import HorizontalProductCard from "./horizontal";
import VerticalProductCard from "./vertical";

type IProductCardType = "vertical" | "horizontal";

interface IProductCardProps {
  type: IProductCardType;
  item: any;
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  type,
  item,
}) => {
  return type === "vertical" ? (
    <VerticalProductCard item={item} />
  ) : (
    <HorizontalProductCard item={item} />
  );
};

export default ProductCard;
