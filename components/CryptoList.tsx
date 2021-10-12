import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function CryptoList() {
  const [list, setList] = useState([]);

  const geckoListAPI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const getData = async () => {
    try {
      const response = await axios.get(geckoListAPI);
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // todo: remove console.log below

  return (
    <>
      {list.map(({ id, image }) => {
        return (
          <div key={id}>
            {/* <h1>{e.id}</h1> */}
            <div style={{ width: "100px" }}>
              <Image
                className="logo"
                src={image}
                alt="hello"
                width={100}
                height={100}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
