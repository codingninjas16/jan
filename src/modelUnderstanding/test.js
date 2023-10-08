// create a document
const mongoose = require('mongoose');
const userModel = require('./userModel');
const classModel = require('./classModel');
require('dotenv').config();

async function createDocument(model, data) {
    try {
        let resp = await model.create(data);


        console.log('resp', resp);
    } catch (error) {
        console.log('error', error);
    }
}

async function read(model) {
    // read 
    // get all documents
    try {
        //var data = await model.find({}); // return all documents
        // all document having name = kajal and  role = 'A
        // var data = await model.find({ $or: [{ role: "A", $or: [{ mobile_no: "1234567891" }] }, { name: "kajal" }] });
        // UNQIUE KEY --> OPERATION ,
        //var data = await model.find({ id: "65211b04f2db99123e914912" });
        var data = await model.find({ name: "kajal" }).select(["name", "email", "-_id"]).sort({ "createdAt": "desc" });
        // key present that condition is always --> true
        //error --> data 
        // find --> [] --> if(data) --> true --> error , data.length > 0
        // findOne --> null --> if(data) --> false --> no error show
        console.log('data', data);
    } catch (error) {
        console.log('error', error);
    }

}
// WANT TO CHANGE NAME OF EMAIL ID = charanjeet2@gmail.com
async function update(model) {
    let data = await model.findOne({ email: 'charanjeet@gmail.com' });
    //
    if (mongoose.isValidObjectId('65226fed918c87829e6fa4f3')) {
        console.log('it is valid');
    }
    data.class_id = "65226fed918c87829e6fa4f3";

    let resp = await data.save();

    console.log('data - updated', resp);

}
async function deleteData(model) {
    // one delete
    let resp = await model.deleteOne({ email: 'charanjeet2@gmail.com' });
    console.log('resp', resp);


}
// $or: [{}, {}]
// let data = {
//     name: 'kajal',
//     email: 'charanjeet2@gmail.com',
//     mobile_no: 1234567894,
//     address: 'hvhsdjfjkdb'
// }

let classData = {
    name: 'class-X1',
    section: 'Y',
    teacher_name: 'abc'
};
async function init() {
    await mongoose.connect(process.env.mongoDBUrl);
    await task();
}
async function task() {
    // student with email id 
    let userData = await userModel.findOne({ email: 'charanjeet@gmail.com' }).populate('class_id', 'teacher_name').exec();
    // let classData = await classModel.findById(userData.class_id);
    // useR
    console.log('teacher name', userData);

}
init();
//remove and delete 
// remove --> 6 deleteOne
//populate
// custom relation


// i want class teacher name of student email id charanmjeet

// nesting populate