import Form from "../Models/Form.js";

export const FormData = async (req, res) => {
  const {
    name,
    date_of_birth,
    startdate,
    enddate,
    role,
    Position,
    range,
    start,
    end,
    acceptancedate,
  } = req.body;

  try {
    // Create a new form document
    const newForm = await Form.create({
      name,
      date_of_birth,
      startdate,
      enddate,
      role,
      Position,
      range,
      start,
      end,
      acceptancedate,
    });

    res.json({
      success: true,
      data: newForm,
      msg: "Data added successfully",
    });
  } catch (error) {
 
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};





export const Updateofferletter = async (req, res) => {
const { _id, name, date_of_birth, startdate, enddate, role, Position, range,
    start,
    end, acceptancedate } = req.body;
  console.log(_id)
  try {
    const update = await Form.updateOne({ _id: _id }, {
      $set: {
        name: name,
        date_of_birth: date_of_birth,
        startdate: startdate,
        enddate: enddate,
        role: role,
        Position: Position,
        range: range,
        start: start,
        end: end,
        acceptancedate: acceptancedate
      }
    })
    res.json({
      sucess: true,
      msg: "offerletter updated Succefully",
      data: update
    })
  }
  catch (e) {
    console.log(e)
  }
}
export const FormAllData = async (req, res) => {
  try {
 
    const forms = await Form.find();

  
    res.json({
      success: true,
      data: forms,
      msg: "Data fetched successfully",
    });
  } catch (error) {
   
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

export const DeleteData = async (req, res) => {
  const { _id } = req.params;
  const deletedata = await Form.deleteOne({ _id: _id });
  res.json({
    data: deletedata,
    msg: "id is deleted",
  });
};



export const Searchofferletter = async (req, res) => {
  const { name, role } = req.query; // Use req.query to handle search params

  // Initialize an empty search condition
  let searchCondition = {};

  // Add name filter if 'name' exists in query
  if (name) {
    searchCondition.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive regex search
  }

  // Add role filter if 'role' exists in query
  if (role) {
    searchCondition.role = { $regex: new RegExp(role, 'i') }; // Case-insensitive regex search
  }

  try {
    // Fetch offer letters based on search conditions
    const offerletters = await Form.find(searchCondition);

    // If no matching records found, return a meaningful message
    if (offerletters.length === 0) {
      return res.status(404).json({
        success: true,
        message: "No records found with the provided search criteria",
      });
    }

    // Return filtered results
    res.status(200).json({
      success: true,
      data: offerletters,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};





