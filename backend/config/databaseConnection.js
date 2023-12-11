import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to MongoDB database via URI: ${connect.connection.host}`
    );
  } catch (error) {
    console.log(`Error; ${error.message}`);
    process.exit(1);
  }
}

export default connectToDatabase;
