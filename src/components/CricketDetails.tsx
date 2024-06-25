import React, { useEffect, useState } from "react";

export interface GenericResponse {
  [key: string]: any;
}

const CricketDetails = () => {
  const [cricketData, setData] = useState<GenericResponse>([]);

  const url =
    "https://cricket.sportmonks.com/api/v2.0/teams/10/squad/6?api_token=ixmkMYzj34eez3NyUSjbbvXGMsCgJTmMCVGZ767UxiGQ712XW1596DEaj9m4";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();

      console.log(data.data.name);

      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(Object.keys(cricketData).length);

  const teamDetails = cricketData?.squad;

  return (
    <>
      {Object.keys(cricketData).length && (
        <>
          <div className="w-[80%] mx-auto space-y-11 ">
            <h1>{cricketData?.name}</h1>
            <img src={cricketData?.image_path} alt="img" />

            <div className="grid grid-cols-4 gap-3 w-[90%] ">
              {teamDetails.map((item:any) => (
                <div className="flex flex-col justify-center items-center m-2 bg-gray-500">
                <img src={item?.image_path} alt="img" />
                  <h1>{item?.fullname}</h1>
                  <h1>{item?.dateofbirth}</h1>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CricketDetails;
