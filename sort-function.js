//sorting methods

db.Students.find() // displays all the datasets in the database

db.Students.find().sort({name:1}) // this command sorts the data in ascending order based on the name field
db.Students.find().sort({name:-1}) // this command sorts the data in descending order

// limiting the amount of data returning 
 
db.Students.find().limit(1) // this method returns only the first record in the database

// sorting the data and then returning limited data 

db.Students.find().sort({name:1}).limit(1) // this method returns the first record in the ascending order of the name field
