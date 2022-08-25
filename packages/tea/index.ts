import express from "express";
const app = express();
const port = 4001;

const TEAS = [
  { price: 2995, id: "0" },
  { price: 780, id: "1" },
  { price: 5500, id: "2" },
];

app.get("/teas", (_req, res) => {
  res.json(TEAS).status(200);
});

app.get("/tea", (req, res) => {
  const { id } = req.query;
  if (!id) {
    res
      .status(400)
      .json({ error: { message: "Query string parameter 'id' is missing." } });
    return;
  }

  const tea = TEAS.find((tea) => tea.id === id);
  if (!tea) {
    res.status(404).json(null);
    return;
  }

  res.status(200).json(tea);
});

app.listen(port, () => {
  console.log(`Tea service is listening on port ${port}`);
});
