"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const stripe = __webpack_require__(8174)(process.env.STRIPE_SECRET_KEY);
async function handler(req, res) {
    console.log(req.body.cartItems);
    if (req.method === "POST") {
        try {
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: [
                    "card"
                ],
                billing_address_collection: "auto",
                shipping_options: [
                    {
                        shipping_rate: "shr_1NdhAdIsBbSG8SZn2ynIruss"
                    },
                    {
                        shipping_rate: "shr_1NdhBHIsBbSG8SZnfENssq8c"
                    }
                ],
                // stripe page
                line_items: req.body.map((item)=>{
                    // show image of product of sanity in payment stripe
                    const img = item.image[0].asset._ref;
                    // images/projectId of sanity
                    const newImage = img.replace("image-", "https://cdn.sanity.io/images/21h0zi5a/production/").replace("-webp", ".webp");
                    return {
                        price_data: {
                            // this currency must use the same currency you chosen in stripe dashboard
                            currency: "usd",
                            product_data: {
                                name: item.name,
                                images: [
                                    newImage
                                ]
                            },
                            unit_amount: item.price * 100
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1
                        },
                        quantity: item.quantity
                    };
                }),
                // this is the naviagte link whrn i made success transaction or cancelled the transaction
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`
            };
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
} // you can send an email to customer about transction with going to settings in dashboard stripe and choose from bussiness settings customer emails and made it available


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1514));
module.exports = __webpack_exports__;

})();