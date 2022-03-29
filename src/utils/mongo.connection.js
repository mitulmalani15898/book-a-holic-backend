/** @author Prit Thakkar (B00890731) */

const mongoose = require("mongoose");
const connect = mongoose.connect;
const MONGODB_URL = process.env.MONGODB_URL;

// connect with the database
(async () => {
  try {
    console.log("Establishing connection with mongo db");
    const db = await connect(
      "mongodb+srv://bookoholic:bookoholic@cluster0.dzzdv.mongodb.net/bookoholic?retryWrites=true&w=majority"
    );
    console.log("Db connected to " + db.connection.name);
  } catch (error) {
    console.log('Db connection error', error)
  }
})();
