
import { Router } from "express";
import { companyData } from "../data/data.js";

const router = Router();

router.get('/task/:memberName', (req, res) => {
  try {
    const { memberName } = req.params;

    const teams = [
      ...companyData.company.teams.backend,
      ...companyData.company.teams.frontend
    ];

    let foundMember = null;
    
    for (const team of teams) {
      foundMember = team.members.find(m => m.name === memberName);
      if (foundMember) break;
    }

    if (!foundMember) {
      return res.json({ success: false, message: "Member not found" });
    }

    res.json({
      success: true,
      message: "Data fetched successfully",
      tasks: foundMember.tasks
    });

  } catch (error) {
    res.json({ success: false, message: 'Unexpected error occurred' });
  }
});


export default router;