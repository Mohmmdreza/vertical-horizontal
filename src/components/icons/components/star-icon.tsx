import * as React from "react"

interface IStarIconProps {
  color?: string
}

const StarIcon: React.FunctionComponent<IStarIconProps> = ({
  color = "#FDCC0D"
}) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4748 5.64037C15.4275 5.50408 15.3415 5.38436 15.2272 5.29575C15.1128 5.20713 14.9751 5.15342 14.8307 5.14113L10.569 4.52267L8.65912 0.670337C8.59779 0.544356 8.50203 0.43811 8.38281 0.363769C8.26359 0.289429 8.12574 0.25 7.98503 0.25C7.84433 0.25 7.70648 0.289429 7.58726 0.363769C7.46804 0.43811 7.37228 0.544356 7.31095 0.670337L5.40105 4.51522L1.13935 5.14113C1.00073 5.16073 0.870411 5.2186 0.763177 5.30816C0.655942 5.39772 0.576089 5.51539 0.532678 5.64782C0.492941 5.77723 0.489375 5.91496 0.522363 6.04624C0.555351 6.17751 0.623647 6.29737 0.719923 6.39295L3.81321 9.37348L3.06423 13.6058C3.03749 13.7455 3.05149 13.8899 3.10458 14.022C3.15767 14.154 3.24762 14.2682 3.36382 14.351C3.47708 14.4315 3.61067 14.4791 3.74959 14.4883C3.8885 14.4975 4.02725 14.468 4.15025 14.4031L7.98503 12.4136L11.8048 14.4106C11.91 14.4696 12.0287 14.5004 12.1494 14.5C12.308 14.5006 12.4628 14.451 12.5913 14.3584C12.7075 14.2756 12.7974 14.1614 12.8505 14.0294C12.9036 13.8974 12.9176 13.753 12.8909 13.6133L12.1419 9.38094L15.2352 6.40041C15.3433 6.30926 15.4232 6.18946 15.4657 6.05492C15.5081 5.92039 15.5113 5.77664 15.4748 5.64037Z"
        fill={color}
      />
    </svg>
  )
}

export default StarIcon