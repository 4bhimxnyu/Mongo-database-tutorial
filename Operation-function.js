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