import express from  "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "../backend/Routes/auth.js"
import userRoute from "./Routes/user.js"
import coachRoute from "./Routes/coach.js"
import reviewRoute from "./Routes/review.js"



dotenv.config()

const app = express()
const port = process.env.PORT || 8000


const corsOptions = {
    origin:true,

}

app.get("/", (req,res) =>{
    res.send("Api is working");
} )


//database connection
mongoose.set("strictQuery", false)
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        console.log("MongoDB is connected")
    } catch(err) {
        console.log("NOT CONNECTED")

    }
}


//middleware

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api/v1/auth", authRoute) //domain/api/v1/auth/register
app.use("/api/v1/users", userRoute)
app.use("/api/v1/coaches", coachRoute)
app.use("/api/v1/reviews", reviewRoute)





app.listen(port, () => {
    connectDB()
    console.log("Server is running on port" + port)
})