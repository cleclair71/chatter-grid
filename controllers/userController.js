const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})

            .populate({
                path: "friends",
                select: "-__v",
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

   // get one user by id
getUserById({ params }, res) {
    User.findOne({ _id: params.userId }) 
    .populate({
        path: "thoughts",
        select: "-__v",
    })
    .populate({
        path: "friends",
        select: "-__v",
    })
    .select("-__v")
    .then((dbUserData) => {
        // If no user is found, send 404
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
},
    // createUser
    createUser({ body }, res) {
        User.create(body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.json(err));
    },

   // update user by id
updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, {
        new: true,
        runValidators: true,
    })
    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => res.json(err));
},
// delete user
deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
        }
        // remove user from friends arrays
        User.updateMany(
            { _id: { $in: dbUserData.friends } },
            { $pull: { friends: params.userId } }
        )
        .then(() => {
            // remove user's thoughts
            Thought.deleteMany({ username: dbUserData.username })
            .then(() => {
                res.json({ message: "Successfully deleted user!" });
            })
            .catch((err) => res.status(400).json(err));
        })
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
},

    // add friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with this id!" });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.json(err));
    },

    // remove friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: "No user with this id!" });
            }
            res.json(dbUserData);
          })
          .catch((err) => res.json(err));
    },
};

module.exports = userController;