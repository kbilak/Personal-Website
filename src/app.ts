import express from "express";
const app = express();
app.listen(app.get("port"), () => {
    console.log(`App is running at http:localhost:${process.env.PORT || 3000}`);
    console.log("CTRL+C to stop the server");
});