const mongoose= require('mongoose')

let schemaStudent = mongoose.Schema({

    firstname:String,
    lastname:String,
    email:String,
    age:Number,
    phone:Number
})

var Student= mongoose.model('student',schemaStudent)

var url='mongodb://localhost:27017/university'

exports.testConnect=()=>{
    return new Promise((resolve,rejecte)=>{

        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            mongoose.disconnect()
            reselve('connected')
        }).catch((err)=>reject(err))
    })
}
exports.postNewStudent=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            let student= new Student({

            }).catch((err)=>reject(err))
        })
    })
}