import express from "express";
import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { playlistController } from "./controllers/station-controller.js";
import { trackController } from "./controllers/reading-controller.js";
import { aboutController } from "./controllers/about-controller.js";

export const router = express.Router();

router.get("/", accountsController.index);

router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addreading", stationController.addTrack);
router.get("/playlist/:playlistid/deletetrack/:trackid", playlistController.deleteTrack);
router.get("/playlist/:playlistid/edittrack/:trackid", trackController.index);
router.post("/playlist/:playlistid/updatetrack/:trackid", trackController.update);

router.get("/about", aboutController.index);
router.get("/logout", accountsController.logout);
