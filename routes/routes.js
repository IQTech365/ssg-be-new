const router = require("express").Router();
const {
  signIn,
  createUser,
  getAllUsers,
} = require("../controllers/auth.controller");
const {
  createLanguage,
  updateLanguage,
  deleteLanguage,
  getAllLanguages,
} = require("../controllers/language.controller");

const {
  createMediaType,
  updateMediaType,
  deleteMediaType,
  getAllMediaTypes,
} = require("../controllers/mediaType.controller");

const {
  createMediaSubType,
  updateMediaSubType,
  deleteMediaSubType,
  getAllMediaSubTypes,
} = require("../controllers/mediaSubType.controller");

const {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} = require("../controllers/category.controller");

const {
  createMedia,
  getAllMedia,
  deleteMedia,
} = require("../controllers/media.controller");

const {
  create,
  list,
  update,
  remove,
} = require("../controllers/event.controller");

const {
  createExternalLink,
  updateExternalLink,
  deleteExternalLink,
  getAllExternalLinks,
} = require("../controllers/externallink.controller");
const {
  createEPaper,
  getAllEPapers,
} = require("../controllers/epaper.controller");
const {
  getAllUserRequest,
  saveUserRequest,
  appendUserRequestReplies,
} = require("../controllers/user.request.controller");
const {
  getOtpToRegisterUser,
  verifyOtp,
  getAllAppUsers,
  editAppUser,
  sendPushNotification,
} = require("../controllers/app.user.controller");
const {
  getAllMobileUsers,
  createMobileUser,
} = require("../controllers/mobile.user.controller");
const { getBanners, createBanner } = require("../controllers/homeBanner.controller");

const { createNotificationToken, getAllNotificationToken, deleteAllNotificationToken } = require("../controllers/pushNotificationToken.controller");

router.post("/signin", signIn);
router.post("/create", createUser);
router.get("/users", getAllUsers);

// Event routes
router.post("/event/create", create);
router.get("/event/all", list);
router.put("/event/update/:id", update);
router.delete("/event/delete/:id", remove);

//langauge routes
router.post("/language/create", createLanguage);
router.put("/language/update", updateLanguage);
router.delete("/language/delete", deleteLanguage);
router.get("/languages", getAllLanguages);

//media-type routes
router.post("/media-type/create", createMediaType);
router.put("/media-type/update", updateMediaType);
router.delete("/media-type/delete", deleteMediaType);
router.get("/mediatypes", getAllMediaTypes);

//media-sub-type routes
router.post("/media-sub-type/create", createMediaSubType);
router.put("/media-sub-type/update", updateMediaSubType);
router.delete("/media-sub-type/delete", deleteMediaSubType);
router.get("/mediasubtypes", getAllMediaSubTypes);

//categories routes
router.post("/category/create", createCategory);
router.put("/category/update", updateCategory);
router.delete("/category/delete", deleteCategory);
router.get("/categories", getAllCategories);

//media routes
router.post("/media/create", createMedia);
router.get("/media/all", getAllMedia);
router.delete("/media/delete/:mediaId", deleteMedia);

//external-link routes
router.post("/externalLink/create", createExternalLink);
router.put("/externalLink/update", updateExternalLink);
router.delete("/externalLink/delete", deleteExternalLink);
router.get("/externalLinks", getAllExternalLinks);

// epaper routes
router.post("/epaper/create", createEPaper);
router.get("/epapers", getAllEPapers);

// user request routes
router.post("/user/request/save", saveUserRequest);
router.get("/user/requests", getAllUserRequest);

// app user controller routes
router.post("/user/request/otp", getOtpToRegisterUser);
router.post("/user/request/verify", verifyOtp);
router.post("/user/request/sendpush", sendPushNotification);


// Get mobile users
router.get("/mobileusers", getAllAppUsers);
// router.get("/mobileusers", getAllMobileUsers);
router.post("/mobileusers", createMobileUser);
router.put("/mobileusers/:mobile", editAppUser);

// app user request replies
router.post("/user/reply/:requestId", appendUserRequestReplies);

// Home Banners
router.get("/banners", getBanners);
router.post("/create-banner", createBanner);

// push notification token
router.post("/notification-token/create", createNotificationToken);
router.get("/notification-token", getAllNotificationToken);
router.delete("/delete-notification-token", deleteAllNotificationToken);
module.exports = router;
