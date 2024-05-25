import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB Connection Error, please make sure db is up to date and running " +
          err
      );
    });
  } catch (error) {
    console.log("Something went wrong in DB");
    console.log(error);
  }
}
