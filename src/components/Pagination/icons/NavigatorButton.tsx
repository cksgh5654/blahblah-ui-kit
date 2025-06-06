import { SVGAttributes } from "react";

interface NavigatorButtonProps extends SVGAttributes<SVGSVGElement> {
  height: string;
}

const NavigatorButton = (props: NavigatorButtonProps) => {
  const { height } = props;
  return (
    <svg
      {...props}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L2.0017 8.46955C0.6661 7.25905 0.6661 6.74095 2.0017 5.53045L7 1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NavigatorButton;
