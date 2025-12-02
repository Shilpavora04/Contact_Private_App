const express = require("express");
const axios = require("axios");
const app = express();

const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS;

app.get("/", async (req, res) => {
 const companies = "https://api.hubspot.com/crm/v3/objects/companies";
 const headers = {
  Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
  "Content-Type": "application/json",
 };
 try {
  const response = await axios.get(companies, { headers });
  res.json(response.data.results);
 } catch (error) {
  console.error(error);
 }
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
