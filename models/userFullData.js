const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserData = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    enrollment_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cgpa: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    mobilenumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    achievement: {
        type: Array
    },
    sociallinks: {
        type: Array
    },
    img:
	{
		data: Buffer,
		contentType: String
	}
});

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        //do not reveal passwordHash
        delete returnedObject.password
    }
})

const UserData =  mongoose.model("userdata", UserData);

module.exports = User;