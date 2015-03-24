var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//8.2
var db = mongoose.connection;
var dbUrl = 'mongodb://username:password@ds043917.mongolab.com:43917/humanresources';

var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var Team = mongoose.model('Team', TeamSchema);

db.on('error', function(){
    console.log('there was an error communicating with the database');
});

mongoose.conect(dbUrl, function(err){
    if(err) {
        return console.log('there was a problem connecting to the database' + err);
    }
    console.log('connected!');
    var team = new Team({
        name: 'Product Development'
    });

    team.save(function (error, data){
        if(error) {
            console.log(error);
        } else {
            console.log(data);
        }

    db.close();
    process.exit();
    })

})

var EmployeeSchema = new Scema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type:String,
            required: true
        }
    },

    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    image:  {
        type String,
        default: 'images/user.png'
    },
    address: {
        lines: {
            type:[String]
        },
        postal: {
            type: String
        }
    }
});
