const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const axios = require("axios");

function generateTransctionID() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const merchantPrefix = "T";
    const transctionID = `${merchantPrefix}${timestamp}${randomNum}`;
    return transctionID;
}

router.post("/payment", async (req, res) => {
    try {
        const { name, number, amount } = req.body
        const data = {
            merchantId: "PGTESTPAYUAT",
            merchantTransactionId: generateTransctionID(),
            merchantUserId: "MUID123",
            name: name,
            amount: 100 * 100,
            redirectUrl: "https://webhook.site/redirect-url",
            redirectMode: "REDIRECT",
            callbackUrl: "https://webhook.site/callback-url",
            mobileNumber: number,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        }

        //creating checksum value or x-verify value
        const payload = JSON.stringify(data);
        const mainPayload = Buffer.from(payload).toString('base64');
        const salt_key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
        const index_key = 1;
        const string = mainPayload + '/pg/v1/pay' + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checkSum = sha256 + '###' + index_key;

        //UAT testing url
        const URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay'
        // const URL = 'https://api.phonepe.com/apis/hermes/pg/v1/pay' 

        const options = {
            method: 'POST',
            url: URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checkSum
            },
            data: {
                request: mainPayload
            }
        };

axios.request(options)
.then(function (response) {
    return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url)
    
})
.catch(function (error) {
    console.log(error);
});
    }
    catch (error){
res.status(500).send({
    message: error.message,
    success: false
})
    }
})