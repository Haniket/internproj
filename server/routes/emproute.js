const express = require("express");

const router = express.Router();

const {
    getAllEmp,
    postCreateEmp,
    putUpdateEmp,
    deleteEmp,
} = require("../controllers/emp");

router.get("/", getAllEmp);

router.post("/", postCreateEmp);

router.put("/:id", putUpdateEmp);

router.delete("/:id", deleteEmp);

module.exports = router;
