const {Model} = require("objection");
const path = require("path");

class User extends Model{
    static get tableName(){
        return "users";
    }

static get relationMappings(){
    return {
        phone :{
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "phone"),
        join: {
            from:'users.id',
            to: 'phones.user_id'
                }
            }
        }
    }
}

module.exports = User;