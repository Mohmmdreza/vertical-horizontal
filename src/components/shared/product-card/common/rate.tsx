import * as React from "react";
import CustomRating from "../../custom-rating";

interface IProductRateProps {
  rate: number;
}

const ProductRate: React.FunctionComponent<IProductRateProps> = ({ rate }) => {
  return <CustomRating isReadonly={true} value={rate} />;
};

export default ProductRate;
