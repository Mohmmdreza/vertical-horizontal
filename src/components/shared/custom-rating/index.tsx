import * as React from "react";
import { Rating } from "@mui/material";
import OutlinedStarIcon from "@/components/icons/components/outlined-star-icon";
import StarIcon from "@/components/icons/components/star-icon";

interface ICustomRatingProps {
  value?: number;
  isReadonly?: boolean;
  onChange?: (value: string) => void;
}

const CustomRating: React.FC<ICustomRatingProps> = ({
  value,
  isReadonly = true,
  onChange,
}) => {
  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    if (onChange) onChange(newVal);
  };

  return (
    <Rating
      icon={<StarIcon />}
      emptyIcon={<OutlinedStarIcon />}
      readOnly={isReadonly}
      value={value}
      onChange={handleChangeRadio}
      max={5}
    />
  );
};

export default CustomRating;
