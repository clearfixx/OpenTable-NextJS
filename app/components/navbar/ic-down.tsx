interface IIconProps {
  width: string;
  height: string;
}

const IconIcDowm = ({ width, height }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      version="1.1"
    >
      <defs />
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M11,11 L11,14.5 C11,14.7761424 10.7761424,15 10.5,15 L9.5,15 C9.22385763,15 9,14.7761424 9,14.5 L9,10.5 L9,9.5 C9,9.22385763 9.22385763,9 9.5,9 L14.5,9 C14.7761424,9 15,9.22385763 15,9.5 L15,10.5 C15,10.7761424 14.7761424,11 14.5,11 L11,11 Z"
          fill="#999"
          transform="translate(12.000000, 12.000000) rotate(-135.000000) translate(-12.000000, -12.000000) "
        />
      </g>
    </svg>
  );
};

export default IconIcDowm;
