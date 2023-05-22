const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

const connect = async () => {
  try {
      await mongoose.connect(process.env.DB_URI)
      console.log('connect to database successfully')
  } catch (error) {
      console.log(error)
      
  }
}
// export 

module.exports = connect    
