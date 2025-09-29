import axios from "axios";

async function create({ code, specialty }: any) {
  const response = await axios.post("/api/doctors",
    { code, specialty },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

  return response.data;
}

export {
  create
}