// update method in mongoDb
 
db.Students.updateOne(filter , update) // syntax of updation of the data in database

db.Students.updateOne({name:"abhi"},{$set:{fulltime:true}}) // this command updates the data in the database where the name is "abhi" and sets the full


// $set parameter is used to set new value in the dataset

db.Students.updateOne({name:"abhi"},{$unset:{fulltime:""}}) // unsets the fulltime field in the dataset where the name is "abhi"

db.Students.updateMany({},{$set:{fulltime:false}}) // updates the value and sets the fulltime field to false in all the datasets in the database

db.Students.updateMany({fulltime:{$exists:true}},{$set:{fulltime:""}})
// this command first checks if the value "fulltime" exist in the data using $exists command and then updates the value and sets the fulltime field to empty string in all the datasets in the database.
