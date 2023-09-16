
//module system
//there is  student which has few properties , name and marks
//you need to make sure that we can't able to access , modify the properties directly

// we need to create student object 
// closure 
//out put function

// var student = {
//     name:'abc',
//     marks:10
// };


// var student = (function createStudent(){
//     var studentObj = {
//         name:'vikas',
//         marks:10
//     };

//     function getName(){
//         return studentObj.name;
//     }
//     function setName(name){
//         studentObj.name = name;
//     }

//     function getMarks(){
//         return studentObj.marks;
//     }
//     function setMarks(marks){
//         //if user is admin
//         if(marks >= 0){
//             studentObj.marks = marks;
//         }
        
//     }
//     return {
//         getMarks:getMarks,
//         setMarks:setMarks,
//         getName:getName,
//         setName:setName
//     }

// })();


var name = "vikas";
var marks = 10;

module.exports.a = 10;


module.exports.setMarks = function setMarks(){
    if(marks >= 0){
        marks = marks;
    }
}



module.exports.name = name;

