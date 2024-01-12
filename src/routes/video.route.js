const express = require('express')
const router = express.Router()
const {uploadVideo } = require("../controllers/video.controller")
const {verifyUser} = require('../middleware/verifyUser.middleware')
const upload = require('../middleware/multer.middleware')

router.route('/uploadVideo').post(
    verifyUser,
    upload.fields([
        {
            name:"videoFile",
            maxCount:1
        },
        {
            name:"thumbNail",
            maxCount:1
        }
    ]),
    uploadVideo
)


module.exports = router