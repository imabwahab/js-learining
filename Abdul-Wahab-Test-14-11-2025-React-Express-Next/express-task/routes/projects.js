import { Router } from "express"
import { companyData } from "../data/data.js";


const router = Router();

router.get("/projects", (req, res) => {
  try {
    const projects = companyData.company.projects;

    res.send({ success: true, message: "data fetched", projects })
  } catch (error) {
    res.json({ success: false, message: error })
  }
})

export default router;