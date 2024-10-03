const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const fleets = require("./data.json");

app.get("/fleets", (req, res) => {
  res.json(fleets);
});

app.post("/add-fleet", (req, res) => {
  const newFleet = req.body;
  newFleet.createdDate= new Date().toLocaleDateString();
  if(newFleet.type===""){
    newFleet.type="Public";
  }
  fleets.push(newFleet);

  fs.writeFileSync("./data.json", JSON.stringify(fleets, null, 2), "utf-8");

  res
    .status(201)
    .json({ message: "Fleet created Successfully!", fleet: newFleet });
});

app.put("/fleets/:name", (req, res) => {
  const fleetName = req.params.name; // Get the fleet name from URL parameters
  const updatedFleet = req.body;
  const fleetIndex = fleets.findIndex((item) => item.name === fleetName);

  if (fleetIndex === -1) {
    return res.status(404).json({ message: "Fleet not found" });
  }

  fleets[fleetIndex] = { ...fleets[fleetIndex], ...updatedFleet };
  // fs.writeFileSync("./data.json", JSON.stringify(fleets, null, 2), "utf-8");

  res.json({
    message: "Fleet updated successfully",
    fleet: fleets[fleetIndex],
  });
});

app.delete("/fleets/:name", (req, res) => {
  const fleetName = req.params.name; 

  const fleetIndex = fleets.findIndex((fleet) => fleet?.name.trim() === fleetName);

  if (fleetIndex === -1) {
    return res.status(404).json({ message: "Fleet not found" });
  }

  const newFleets = fleets.filter((fleet) => fleet.name !== fleetName);

  fs.writeFileSync("./data.json", JSON.stringify(newFleets, null, 2), "utf-8");

  res.json({ message: "Fleet deleted successfully" });
});

app.listen(8080, () => {
  console.log("server started");
});
