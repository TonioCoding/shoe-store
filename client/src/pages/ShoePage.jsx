import { useEffect, useState } from "react";

const ShoePage = () => {
  const url = new URL(location.href);
  const urlId = url.searchParams.get("id");
  const [currentShoe, setCurrentShoe] = useState({});
  console.log(currentShoe);

  useEffect(() => {
    fetch(`http://localhost:9000/api/v1/shoe/get-shoe/${urlId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCurrentShoe(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>hello</div>;
};

export default ShoePage;
