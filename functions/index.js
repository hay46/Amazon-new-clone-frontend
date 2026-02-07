const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// Stripe ቁልፍህ በትክክል sk_test መሆኑን አረጋግጥ
const stripe = require("stripe")(process.env.STRIPE_KEY);

setGlobalOptions({ maxInstances: 10 });

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Success!", // message የሚለው ፊደል ተስተካክሏል
    });
});

app.post("/payment/create", async (req, res) => {
    const total = req.query.total;

    if (total > 0) {
        try {
            // ስህተት 1፡ stripe.paymentIntents (plural መሆን አለበት)
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: "usd", // ስህተት 2፡ currency (ፊደሉ ተስተካክሏል)
            });

            console.log("Payment Intent Created:", paymentIntent.id);
            
            // ለ Frontend አስፈላጊው መረጃ client_secret ነው
            res.status(201).json({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            console.error("Stripe Error:", error.message);
            res.status(500).json({ message: error.message });
        }
    } else {
        // ስህተት 3፡ res.status.apply(403) ሳይሆን res.status(403)
        res.status(403).json({
            message: "The total must be greater than 0",
        });
    }
});

exports.api = onRequest(app);