const express = require("express")
const { accounts, writeJSON } = require("../data")

const router = express.Router()

router
    .get("/transfer", (req, res) => {
        res.render("transfer")
    })
    .post("/transfer", (req, res) => {
        let { from, to, amount } = req.body
        if (accounts[from].balance < amount) {
            res.render("transfer", { "message": "Insuffient fund" })
        }
        accounts[from].balance -= parseInt(amount);
        accounts[to].balance += parseInt(amount);

        writeJSON()

        res.render("transfer", { message: "Transfer Completed" })
    })

router
    .get("/payment", (req, res) => {
        res.render("payment", { account: accounts.credit })
    })
    .post("/payment", (req, res) => {
        let { amount } = req.body
        accounts.credit.balance -= parseInt(amount)
        accounts.credit.available += parseInt(amount)

        writeJSON()

        res.render("payment", { "message": "Payment Successful", 'account': accounts.credit })
    })


module.exports = router
