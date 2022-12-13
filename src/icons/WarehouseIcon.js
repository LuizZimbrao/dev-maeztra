function WarehouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="url(#warehouseIcon)" d="M0 0H32V32H0z"></path>
      <defs>
        <pattern
          id="warehouseIcon"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00195)" xlinkHref="#image0_2_341"></use>
        </pattern>
        <image
          id="image0_2_341"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default WarehouseIcon;
