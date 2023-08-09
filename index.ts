import express from "express";
import { Request, Response } from "express";

const app = express();

// [test] http://localhost:3000/ping
app.get("/ping", (req: Request, res: Response) => {
    res.json({ msg: "node + express + ts" });
});

app.listen(3000);