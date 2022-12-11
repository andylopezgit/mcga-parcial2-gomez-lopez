import { useEffect } from "react";

const PublicDates = () => {
  const getDates = async () => {
    const response = await fetch(
      "https://mcga-2022-backend.vercel.app/api/products/public"
    );
    let data = await response.json();
    console.log("no", data);
  };

  useEffect(() => {
    getDates();
  });

  return (
    <>
      <h1>Public dates</h1>
    </>
  );
};

export default PublicDates;
