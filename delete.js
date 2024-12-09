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

// $lte, $in, $nin, $mod, $regex, $type, 

// Now we will learn about logical operations

//first is $and operator
db.Students.find({$and:[{gender:"male"},{age:{$lte:45}}]}) // here we are checking the gender and age of the data and then segregating them all

// this is the demonstration of $or
db.Students.find({$or:[{gender:"male"},{age:{$lte:45}}]})// here we are checking if one of the following condition is true and then we will give the output


// NOR Condition
db.Students.find({$nor:[{gender:"male"},{age:{$lte:45}}]}) // here we are checking the conditons and we are divinding the data based on that  **both the conditions should be excluded **


// not logical operator

db.Students.find({age:{$not:{$lte:18}}}) 
// this operator returns all the value which are not equal to the parameter , here in this case the database of the students have four value , out of which 3 are greater than 18 and 1 is less than 18 , so the output will be 3 value which are greater.


// searching one file in dataset of thousands and millions , it takes a lot of time to complete the search , so we have got the concept of indexing data

db.Students.createIndex({name:1}) // here we are indexing our data and increasing time complexity 

db.Students.find({name:"aish"}).explain("executionStats") 
// this will check all the data set value but will take the index and get the output with better time complexity 

// delete or drop function works like a pop method 

db.Students.drop() // this will delete the student collection

// creating collection