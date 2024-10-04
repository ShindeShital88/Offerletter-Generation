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

    // Respond with success and the created document
    res.json({
      success: true,
      data: newForm,
      msg: "Data added successfully",
    });
  } catch (error) {
    // Handle any errors during the database operation
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
    // Fetch all the documents from the 'Form' collection
    const forms = await Form.find();

    // Respond with the fetched data
    res.json({
      success: true,
      data: forms,
      msg: "Data fetched successfully",
    });
  } catch (error) {
    // Handle any errors during the database operation
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
