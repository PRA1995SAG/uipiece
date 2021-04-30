import Guru from "../models/guru";

const loadDummyData = async () => {
  const response = await fetch("https://randomuser.me/api/?results=1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData = await response.json();

  console.log(responseData);

  return responseData.results.map(
    (result) =>
      new Guru(
        result.login.uuid,
        result.name.first + " " + result.name.last,
        result.dob.age,
        result.gender,
        result.picture.medium
      )
  );
};

export default loadDummyData;
