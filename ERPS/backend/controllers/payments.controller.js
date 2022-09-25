let Payment = require("../models/payments.model.js");

//Add new payments

const addPayment = async (req, res) => {
     
        const paymentID = req.body.paymentID;
        const paymentDescription = req.body.paymentDescription;
        const paymentCategory = req.body.paymentCategory;
        const paymentDate = Date(req.body.paymentDate);
        const paymentAmount = Number(req.body.paymentAmount);

        try{
            const payment = await Payment.create({
                paymentID,
                paymentDescription,
                paymentCategory,
                paymentDate,
                paymentAmount
        })

        return res.status(200).json(payment);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    
  };

  module.exports = {
    addPayment
  };