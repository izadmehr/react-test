import React from 'react';

export function CaretUp({
  fill,
  size
}: {
  fill: string;
  size: number;
}): JSX.Element {
  return (
    <svg
      id="caret_up"
      width={size}
      height={size}
      viewBox="0 0 292.362 292.362"
      fill={fill}
    >
      <path
        d="M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286
		C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813
		c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z"
      />
    </svg>
  );
}
