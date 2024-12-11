// searching one file in dataset of thousands and millions , it takes a lot of time to complete the search , so we have got the concept of indexing data

db.Students.createIndex({name:1}) // here we are indexing our data and increasing time complexity 

db.Students.find({name:"aish"}).explain("executionStats") 
// this will check all the data set value but will take the index and get the output with better time complexity 

// delete or drop function works like a pop method 

db.Students.drop() // this will delete the student collection
