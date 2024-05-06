import dotenv from "dotenv";
import connectDB from  "./db/index.js"
import express from "express";
const app = express()


dotenv.config()

const start = async()=>{
    const port = process.env.PORT || 3000
      await connectDB()
        await app.listen(port,()=>{
            console.log(`Server is runing on port: ${port}`);
        })
    
}
start()


/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
    } 
    
    app.listen(process.env.PORT, () =>{
        console.log(`App is listening on ${process.env.PORT}`);
    })

    catch (error) {
       console.error("ERROR: ", error);
       throw error; 
    }
}) ()
*/
