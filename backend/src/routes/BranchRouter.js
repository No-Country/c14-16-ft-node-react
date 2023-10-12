import express from "express"
import { getBranches, getBranch, getBranchesByCompany, createBranch, updateBranch,deleteBranch } from "../controllers/BranchController.js"
import { checkSession } from "../middlewares/session.js"

export const BranchRouter = express.Router()

BranchRouter.use(checkSession)

BranchRouter.get("/", getBranches)
BranchRouter.get("/:id" , getBranch)
BranchRouter.get("/byCompany/:id",getBranchesByCompany)
BranchRouter.post("/", createBranch)
BranchRouter.put("/:id", updateBranch)
BranchRouter.delete("/:id", deleteBranch)