
var Db = require('mongodb').Db;
const mongoClient = require('mongodb').MongoClient;

class MongoUtil {
    
    constructor(url ) {
        
        this.url = url;
        console.log("----------------------------",this.url)
    }

    createCollection (collection) {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url, {useUnifiedTopology:true},function (error, client) {
                if (error) {
                    reject(error);
                } else {
                   const db = client.db('banking')
                    db.createCollection(collection, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    createRecord (collection, document) {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url, {useUnifiedTopology:true},function (error, client) {
                if (error) {
                    reject(error);
                } else {
                   // document = JSON.parse(document);
                 const  db = client.db('banking')
                    db.collection(collection).insertOne(document, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    findRecord (collection, query, fields) {
        console.log(this.url);
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url, {useUnifiedTopology:true},function (error, client) {
                if (error) {
                    reject(error);
                } else {
                   
                    
                    if (!fields) {
                        fields = {};
                    }
                     const db = client.db('banking')
                    db.collection(collection).find(query, fields).toArray(function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    findSortedRecord (collection, query, fields,sort) {
        console.log(this.url);
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error, client) {
                
                if (error) {
                    reject(error);
                } else {
                    
                    if (!fields) {
                        fields = {};
                    }
                  const  db = client.db('banking')
                    db.collection(collection).find(query, fields).sort(sort).toArray(function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    updateRecord(collection, query, values){
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url, {useUnifiedTopology:true},function (error, client) {
                if (error) {
                    reject(error);
                } else {
                  const  db = client.db('banking')
                    db.collection(collection).updateOne(query, values, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };


     findAndUpdate(collection, query, update){
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error, client) {
                if (error) {
                    reject(error);
                } else {
                  const  db = client.db('banking')
                    const options = { returnOriginal: false };
                    db.collection(collection).findOneAndUpdate(query, update, options,function(err,res){
                        if(err){
                            reject(error);
                        }else{
                           
                            client.close();
                            resolve(res);
                        }

                    });
                    // .then(updatedDocument => {
                    //   if(updatedDocument) {
                    //     console.log('Successfully updated document');
                    //   } else {
                    //     console.log("No document matches the provided query.");
                    //   }
                    //   //return updatedDocument
                    // })
                    // .catch(err => console.error('Failed to find and update document:' ,err));
                }
            });
        });
    };


    updateRecords(collection, query, values) {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error, client) {
                if (error) {
                    reject(error);
                } else {
                   const db = client.db('banking')
                    db.collection(collection).updateMany(query, values, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                           client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    updateRecordWithUpsert (collection, query, values)  {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error, client) {
                if (error) {
                    reject(error);
                } else {
                  const  db = client.db('banking')
                    db.collection(collection).updateOne(query, values, {upsert: true}, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    findAggregatedRecords (collection, array) {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error,client) {
                if (error) {
                    reject(error);
                } else {
                   const db = client.db('banking')
                    db.collection(collection).aggregate(array).toArray(function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    fetchSequenceValue (sequenceName) {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error, client) {
                if (error) {
                    reject(error);
                } else {
                     const db = client.db('banking')
                    db.collection("counters").findOneAndUpdate({_id: sequenceName}, {$inc: {sequence: 1}}, {returnOriginal: false}, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(res.value.sequence);
                            client.close();
                            resolve(res.value.sequence);
                        }
                    });
                }
            });
        });
    };


    emptyCollection (collection) {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error, client) {
                if (error) {
                    reject(error);
                } else {
                  const  db = client.db('banking')
                    db.collection(collection).deleteMany({},{}, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                        client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };

    insertRecords (collection, documents) {
        return new Promise((resolve, reject) => {
            mongoClient.connect(this.url,{useUnifiedTopology:true}, function (error, client) {
                if (error) {
                    reject(error);
                } else {
                  const  db = client.db('banking')
                    db.collection(collection).insertMany(documents, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            client.close();
                            resolve(res);
                        }
                    });
                }
            });
        });
    };
}

module.exports = MongoUtil;