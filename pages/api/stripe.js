
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    console.log(req.body.cartItems)
    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1NdhAdIsBbSG8SZn2ynIruss' },
                    { shipping_rate: 'shr_1NdhBHIsBbSG8SZnfENssq8c' },
                ],
                // stripe page
                line_items: req.body.map((item) => {
                    // show image of product of sanity in payment stripe
                    const img = item.image[0].asset._ref;
                    // images/projectId of sanity
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/21h0zi5a/production/').replace('-webp', '.webp');
                    return {
                        price_data: {
                            // this currency must use the same currency you chosen in stripe dashboard
                            currency: 'usd',
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity
                    }
                }),
                // this is the naviagte link whrn i made success transaction or cancelled the transaction
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);

            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
// you can send an email to customer about transction with going to settings in dashboard stripe and choose from bussiness settings customer emails and made it available