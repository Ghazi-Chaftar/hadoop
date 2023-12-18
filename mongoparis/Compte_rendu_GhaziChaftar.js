//1
db.paris.insert({
    "_id": 123456789,
    "name" : "Pena Festayre",
    "location":{
        "city" : "Paris",
    }
})
//2 
db.paris.find({category:"accommodation"},{name:1,"_id":0})
// 3
db.paris.find({"contact.phone":{$exists:true}},{name:1,"contact.phone":1,"id":0})
// test
db.paris.aggregate([
    { $group: { _id: "$category", names: { $push: "$name" } } }
  ])

// 4 
db.paris.find({ "services": { $elemMatch: { $eq: "chambres non-fumeurs" } } }, { "name": 1, "services": 1 })

// 5
db.paris.find({ "services": { $exists: true, $size: { $gte: 4 } } }, { "name": 1, "services": 1 })

// 6
db.paris.distinct("category")

// 7 
db.paris.find(
    { "category": "accommodation", "services": { $elemMatch: { $eq: "blanchisserie" } } },
    { "name": 1, "contact.phone": 1, "location.address": 1 }
  ).sort({ "name": 1 })

// 8
db.paris.count({ "category": "accommodation", "services": { $elemMatch: { $eq: "chambres non-fumeurs" } } })

// 9
db.paris.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } }
  ])

// 10
db.paris.aggregate([
    { $match: { "category": "accommodation" } },
    { $unwind: "$services" },
    { $group: { _id: "$services", count: { $sum: 1 } } }
  ])
// 11
db.paris.updateMany({}, { $set: { "nb_reviews": { $size: "$reviews" } } })

// 12
db.paris.aggregate([
    { $group: { _id: "$nb_reviews", count: { $sum: 1 } } }
  ])