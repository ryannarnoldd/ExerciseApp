const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
    .get("/", (req, res, next) => {
        model.GetAll()
            .then(user => {
                res.send(user);
            })
            .catch(next)
    })

    .get("/:user_id", (req, res, next) => {
        model.Get(req.params.user_id)
            .then(user => {
                res.send(user);
            })
            .catch(next)
    })

    .get("/byhandle/:handle", (req, res, next) => {
        model.GetByHandle(req.params.handle)
            .then(user => {
                res.send(user);
            })
            .catch(next)
    })

    .get("/bysearch/:search", (req, res, next) => {
        model.GetBySearch(req.params.search)
            .then(user => {
                res.send(user);
                // ?????
            })
            .catch(next)
    })

    .patch("/:user_id", (req, res, next) => {
        model.Update(req.params.user_id, req.body)
            .then(user => res.send(user))
            .catch(next)

    })

    .delete("/:user_id", (req, res, next) => {
        model.Delete(req.params.user_id)
            .then(user => res.send({ deleted: user }))
            .catch(next)

    })

    .post("/login", (req, res, next) => {
        model.Login(req.body.handle, req.body.password)
            .then(user => {
                res.send(user);
            })
            .catch(next)
    })

    .post("/register", (req, res, next) => {
        model.Register(req.body)
            .then(user => {
                res.send(user);
            })
            .catch(next)
    })

    .post("/seed", (req, res, next) => {
        model.Seed()
            .then(user => {
                res.status(201).send("Created");
            })
            .catch(next)
    })

    .post("/test", (req, res, next) => {
        res.status(201).send("Testing");
    })

module.exports = app;