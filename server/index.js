import express from 'express';
import ImageKit from "imagekit";
import dotenv from "dotenv";
import cors from "cors";

const port = process.env.PORT || 3000;
const app = express();
// Load environment variables
dotenv.config();

app.use(cors({
    origin: "*",

}));

app.get('/', (req, res) => {
    res.send("Hello World!");
})

const imagekit = new ImageKit({
    urlEndpoint: "https://ik.imagekit.io/dad8yjrvg",
    publicKey: "public_u1bzyX5O9dgGQE4zOZl1EyJS8yw=",
    privateKey: "private_EYH/+d0My40DlcKOsy5tmeWOp34="
})

// const imagekit = new ImageKit({
//     urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
//     publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
//     privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
// })

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port, () => {
    console.log("Server started on port " + port);
});