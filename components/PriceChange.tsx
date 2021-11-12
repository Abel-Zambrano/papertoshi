import styled from "styled-components";
import { useState } from "react";

const MyPriceChange = styled.p`
  .red {
    color: red;
  }

  .green {
    color: green;
  }
`;

type PriceChangeProps = {
  value: number;
};

export default function PriceChange({ value }: PriceChangeProps) {
  const [colorChange, setColorChange] = useState("");
  if (value < 0) {
    setColorChange("red");
  } else {
    setColorChange("green");
  }

  console.log(colorChange);

  return <MyPriceChange className={colorChange}>{value}</MyPriceChange>;
}
