"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboadController_1 = require("../controllers/dashboadController");
const router = (0, express_1.Router)();
router.get("/", dashboadController_1.getDashboardMetrics);
exports.default = router;
