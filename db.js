const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('db connected'))
//   .catch((error) => console.log('db error', error));


try {
  mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
} catch (error) {
  console.log(error);
}