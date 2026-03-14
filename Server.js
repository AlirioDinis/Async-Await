import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.get("/api/user/:id", async (req, res) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
    
    console.log("Status:", response.status);
    
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Erro:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));