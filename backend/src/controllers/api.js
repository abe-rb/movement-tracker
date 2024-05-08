import express from "express";
import resultHandler from "../utils/resultHandler.js";
import database from "../utils/database.js";

const router = express.Router();

router.get("/:nip([0-9]{8})", (req, res) => {
  const nip = req.params["nip"];
  const query = "SELECT * FROM tbl_corrective_movement WHERE nip=" + nip + ";";
  database
    .execute(query)
    .then((data) => {
      const rows = data[0];
      if (rows.length < 1) {
        return res.sendStatus(404);
      }
      const tasks = resultHandler(rows);
      return res.json({ tasks });
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
