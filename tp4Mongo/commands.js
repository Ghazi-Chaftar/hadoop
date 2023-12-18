// 1
show collections

// 2

var collections = db.getCollectionNames();
collections.forEach(function(collectionName) {
    var cursor = db.getCollection(collectionName).find();
    print("Documents de la collection " + collectionName + ":");
    while (cursor.hasNext()) {
        printjson(cursor.next());
    }
    print("\n");
});
// 3
db.employes.find().count()
// 4
db.employes.insert({nom : "Ghazi", prenom:"Chaftar", anciennete:10});
db.employes.insertOne({nom : "Ghazii", prenom:"Chaftarr", prime:150});
//5
db.employes.find({prenom:"David"})
//6
db.employes.find({prenom:/^D.*|.*D $/});
// 7
db.employes.find({prenom:/^D[a-z]{4}$/});
// 8
db.employes.find({prenom:/^[AEIOUY].*[aeiouy]$/});
// 9 
db.employes.find().forEach(function(p){
    let pre = p.prenom.toLowerCase();
    if (pre.substr(0,1)==pre.substr(pre.length-1,1)){
        print(pre)
    }
})
// 10
db.employes.find(
    {anciennete : {$gt : 10}},
    {_id:0, nom:1, prenom : 1}
)
// 11
db.employes.find(
    {'adresse.rue': {$exists : true}},
    {nom : 1, adresse: 1}
)
// 12 
db.employes.update(
    {prime:{$exists : true}},
    {$inc : {prime:200}},
    {multi : true}
)
// 13
db.employes.find({
    anciennete: {$exists : true}},
    {_id : 0}
).sort({anciennete : -1}).limit(3)


//14
db.employes.find(
    {'adresse.ville': "Toulouse"},
    {_id : 0, nom:1, anciennete:1, prenom:1}
)
// 15
db.employes.find(
    {
        prenom : "/^M.*/",
        "adresse.ville" : {
            $in : ["Foix","Bordeaux"]
        }
    }
)

// 16

db.employes.update(
    {prenom : "Dominique", nom:"Mani"},
    {
        $set : {
            'adresse.numero' : 20,
            'adresse.ville' : 'Marseille',
            'adresse.codepostal': '13015',
        },
        $unset :{
            'adresse.rue' : 1
        }
    }
)

// 17 
db. employes.updateMany (
    {$and :
        [
            {"adresse . ville":
                {snin : ["Paris ", " Toulouse ", " Bordeaux " ]}
            },
                {prime : { sexists : false }}
        ]
    },
    {$set: {prime : 1500 }}
);

// 18
db.employes.find(
    {
        tel : {$exists : true}
    },
    {}
).forEach(
    function(t){
        db.employes.updateMany(
            {_id : t._id},
            {
                $push : {telephone : t.tel},
                $unset : {tel : 1}
            }
        )
    }
)

// 19
db.employes.find(
    {
        prime : {$exists : 0}
    }
).forEach(
    function(doc){
        var length = doc.adresse.ville.length;
        var newPrime = 100*length;
        db.employes.update(
            { _id : doc._id},
            {
                $inc : {prime : newPrime}
            }
        )
    }
)


// 20 
db.employes.find().forEach(
    function(p){
        var email = p.nom + '.' + p.prenom + '@formation.fr';
        if (p.telephone){
            var email = p.prenom + '.' + p.nom + '@formation.fr';
        }
        db.employes.updateMany(
            { _id : p._id},
            {$set : { mail : email}}
        )
    }
)


// 21 
db.employes.aggregate([
    {
      $group: {
        _id: "$prenom",
        totalAnciennete: { $sum: "$anciennete" }
      }
    }
  ])