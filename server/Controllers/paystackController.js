const Paystack = require('../Models/paystackModel')
const axios = require("axios")


const payMoney = async (req, res) => {
  try {
    const {email, amount } = req.body
    const payment = await axios.post("https://api.paystack.co/transaction/initialize", req.body, {
      headers: {
          Authorization: "Bearer sk_test_7b7d743a6d038c5748201e273b651194abc5a40d",
          "Content-Type": "application/json"
      }
    })
    console.log("new payment", payment)
    const newPayment = new Paystack({
      email, 
      amount,
      url: payment.data.data.authorization_url,
      reference: payment.data.data.reference
    })
    const savedPayment = await newPayment.save()
    res.status(201).json({success: true, message: "Payment initialize successfully.", savedPayment })
  }
  catch(err){
    console.log(err.message)
  }
}

module.exports = payMoney