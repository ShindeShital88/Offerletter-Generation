import Login from "../Models/Login.js";


export const UserLogin = async (req, res) => {
    const { UserName, Email, Password } = req.body;

    try {
        // Create a new form document
        const newForm = await Login.create({
            UserName,
            Email,
            Password

        });

        // Respond with success and the created document
        res.json({
            success: true,
            data: newForm,
            msg: 'Login  successfully',
        });
    } catch (error) {
        // Handle any errors during the database operation
        res.status(500).json({
            success: false,
            msg: error.message,
        });
    }
};


export const GetAllData = async (req, res) => {
    try {
      // Fetch all the documents from the 'Form' collection
      const login = await Login.find();
  
      // Respond with the fetched data
      res.json({
        success: true,
        data: login,
        msg: 'login data successfully',
      });
    } catch (error) {
      // Handle any errors during the database operation
      res.status(500).json({
        success: false,
        msg: error.message,
      });
    }
  };