const express = require("express");

const router = express.Router();
const User = require('../models/controller');

router.patch("/api/v1/follow/", async (req, res) => {
    try {
        let whomFollowed = await User.findByIdAndUpdate({ _id: req.body.followingId},
            { $push: { following: req.body.followerId } }
        );
        let whoFollowedMe = await User.findByIdAndUpdate({ _id: req.body.followerId },
            { $push: { followers: req.body.followingId } }
        )
        return res.status(200).send({ message: "User Follow Success"});
    } catch (e) {
        return res.status(500).send({ message: "User Follow Failed", data: e.message });
    }
});

router.patch("/api/v1/unfollow/",async (req, res) => {
    try {
        let whomUnFollowed = await User.findByIdAndUpdate({ _id: req.body.followingId },
            { $pull: { following: req.body.followerId } }
        );
        let whoUnFollowedMe = await User.findByIdAndUpdate({ _id: req.body.followerId },
            { $pull: { followers: req.body.followingId } }
        )
        return res.status(200).send({ message: "User UnFollow Success"});
    } catch (e) {
        return res.status(500).send({ message: "User UnFollow Failed", data: e.message });
    }
});

module.exports = router;
