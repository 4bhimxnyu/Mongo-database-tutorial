db.collectionname.find() // finds all the documents in a collection
db.collectionname.find().pretty() // finds all the documents in a collection and prints them in a

db.collectionname.find().count() // counts the number of documents in a collection
db.collectionname.find().sort({field: 1}) // sorts the documents in a collection in ascendind order
db.collectionname.find().sort({field:-1}) // sorts the documents in a collection in descending order