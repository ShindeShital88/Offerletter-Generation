import {Schema, model} from "mongoose";

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,  // Keep this as Date, expecting valid date input
    required: true,
  },
  startdate: {
    type: Date,  // Keep this as Date, expecting valid date input
    required: true,
  },
  enddate: {
    type: Date,  // Keep this as Date, expecting valid date input
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },

  range: {
    type: String,
    required: true,
  },

  start: {
    type: Number,  // Expecting a valid number here
    required: true,
  },
  end: {
    type: Number,  // Expecting a valid number here
    
  },
  acceptancedate: {
    type: String,  // Changed to String if you expect a statement like "I accept..."
    required: true,
  },
});

const Form = model('Form', FormSchema);
export default Form;
