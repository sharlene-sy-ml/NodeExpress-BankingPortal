const express = require("express")
const { accounts } = require("../data")

const router = express.Router()

router.get("/savings", (req, res) => {
    res.render("account", { 'title': 'Account Summary', 'account': accounts.savings })
})

router.get("/checking", (req, res) => {
    res.render("account", { 'title': 'Account Summary', 'account': accounts.checking })
})

router.get("/credit", (req, res) => {
    res.render("account", { 'title': 'Account Summary', 'account': accounts.credit })
})

module.exports = router
