import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Allrouters from './Routers/Routers.js';
import Database from './Database/database.js';

import dotenv  from 'dotenv'
dotenv.config()
// import Form from './Models/Form.js'; // Import the model properly
// import Login from './Models/Login.js';

const certificate = express();
certificate.use(express.json());
certificate.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

Database()


// Start the server
certificate.listen(process.env.PORT, () => {
  console.log('Server is responding on port:',process.env.PORT);
});



certificate.use('/api', Allrouters)

























// // POST route for form submission
// certificate.post('/form', async (req, res) => {
//   const { name, date_of_birth, startdate, enddate, role, Position, stipend, acceptancedate } = req.body;

//   try {
//     // Create a new form document
//     const newForm = await Form.create({
//       name,
//       date_of_birth,
//       startdate,
//       enddate,
//       role,
//       Position,
//       stipend,
//       acceptancedate,
//     });

//     // Respond with success and the created document
//     res.json({
//       success: true,
//       data: newForm,
//       msg: 'Data added successfully',
//     });
//   } catch (error) {
//     // Handle any errors during the database operation
//     res.status(500).json({
//       success: false,
//       msg: error.message,
//     });
//   }
// });



// // GET route to fetch all form data
// certificate.get('/form', async (req, res) => {
//     try {
//       // Fetch all the documents from the 'Form' collection
//       const forms = await Form.find();
  
//       // Respond with the fetched data
//       res.json({
//         success: true,
//         data: forms,
//         msg: 'Data fetched successfully',
//       });
//     } catch (error) {
//       // Handle any errors during the database operation
//       res.status(500).json({
//         success: false,
//         msg: error.message,
//       });
//     }
//   });


//   certificate.delete('/form/:_id', async(req, res)=>{
//     const {_id} =req.params;
//     const deletedata= await Form.deleteOne({_id:_id})
//     res.json({

//         data:deletedata,
//         msg:"id is deleted"
//     })
//  })










// // Loginuser code start



// certificate.post('/login', async (req, res) => {
//   const { UserName,  Email, Password } = req.body;

//   try {
//     // Create a new form document
//     const newForm = await Login.create({
//       UserName,
//       Email,
//       Password
     
//     });

//     // Respond with success and the created document
//     res.json({
//       success: true,
//       data: newForm,
//       msg: 'Login  successfully',
//     });
//   } catch (error) {
//     // Handle any errors during the database operation
//     res.status(500).json({
//       success: false,
//       msg: error.message,
//     });
//   }
// });






//   certificate.get('/logins', async (req, res) => {
//     try {
//       // Fetch all the documents from the 'Form' collection
//       const login = await Login.find();
  
//       // Respond with the fetched data
//       res.json({
//         success: true,
//         data: login,
//         msg: 'login data successfully',
//       });
//     } catch (error) {
//       // Handle any errors during the database operation
//       res.status(500).json({
//         success: false,
//         msg: error.message,
//       });
//     }
//   });


// // login Authentication code

// const getProtectedData = async () => {
//   try {
//     const token = localStorage.getItem('authToken');
//     const response = await axios.get('http://localhost:4000/protected-route', {
//       headers: {
//         Authorization: `Bearer ${token}`, // Attach token to the request headers
//       },
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching protected data', error);
//   }
// };




