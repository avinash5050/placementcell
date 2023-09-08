const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/.env' });
console.log("MongoURL",process.env.MONGO_URL);
mongoose.connect('mongodb+srv://pawaravinash5050:1IWgF4BW2EddqmCu@placementcell.u5z72pd.mongodb.net/?retryWrites=true&w=majority'
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: Mongodb');
});

module.exports = db;
