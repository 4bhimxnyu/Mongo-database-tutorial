



db.Students.deleteOne({name:"xyz"}) // deletes one data value as per the parameters passed

db.Students.deleteMany({deletedDataSet:{$exists:false}})
// this command first checks if the value "deletedDataSet" exist in the data using $exists command and then deletes the data value as per the parameters passed.




