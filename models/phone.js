const {Model} = require("objection");
const user = require("./user")
const path = require("path");

class Phone extends Model{
    static get tableName(){
        return "phones";
    }

static get relationMappings(){
    const User = require('./user');
    return{
        users:{
        relation: Model.BelongsToOneRelation,
        modelClass:User ,
        join: {
            from:'phones.user_id',
            to: 'users.id'
                }
            }
        }
    }
 }
module.export = Phone;
