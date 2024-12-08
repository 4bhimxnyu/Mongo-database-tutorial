db.students.insertMany() // inserts many data with unique object id's in the database
db.students.insertOne() // inserts only one data with unique object id's in the database

//sorting methods

db.Students.find() // displays all the datasets in the database

db.Students.find().sort({name:1}) // this command sorts the data in ascending order based on the name field
db.Students.find().sort({name:-1}) // this command sorts the data in descending order

// limiting the amount of data returning 
 
db.Students.find().limit(1) // this method returns only the first record in the database

// sorting the data and then returning limited data 

db.Students.find().sort({name:1}).limit(1) // this method returns the first record in the ascending order of the name field

// update method in mongoDb
 
db.Students.updateOne(filter , update) // syntax of updation of the data in database

db.Students.updateOne({name:"abhi"},{$set:{fulltime:true}}) // this command updates the data in the database where the name is "abhi" and sets the full
// $set parameter is used to set new value in the dataset

db.Students.updateOne({name:"abhi"},{$unset:{fulltime:""}}) // unsets the fulltime field in the dataset where the name is "abhi"

db.Students.updateMany({},{$set:{fulltime:false}}) // updates the value and sets the fulltime field to false in all the datasets in the database

db.Students.updateMany({fulltime:{$exists:true}},{$set:{fulltime:""}})
// this command first checks if the value "fulltime" exist in the data using $exists command and then updates the value and sets the fulltime field to empty string in all the datasets in the database.

db.Students.deleteOne({name:"xyz"}) // deletes one data value as per the parameters passed

db.Students.deleteMany({deletedDataSet:{$exists:false}})
// this command first checks if the value "deletedDataSet" exist in the data using $exists command and then deletes the data value as per the parameters passed.

db.Students.find({name:{$ne:"abhi"}})
// this command finds all the data values where the name is not equal to "abhi" using $ne command. 

// if we want to use different operators in the find method we can use the following commands like $gt, $lt, $gte

// $lte, $in, $nin, $mod, $regex, $type, $