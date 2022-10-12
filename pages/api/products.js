// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    // Request products from stripe using our Stripe Secret Key
    const products = await stripe.products.list({
      limit: 100,
    });

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
