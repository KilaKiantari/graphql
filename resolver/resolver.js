//const { ApolloError } = require("apollo-error");
const User = require("./../models/user");
const Phone = require("./../models/phone")

const resolvers = {
  Query: {
    users(_, args) {
      const data_user = User.query();
      return data_user
    },
    phone(_,args){
      const data_phone = Phone.query();
      return data_phone
    }
   },

  Mutation: {
    async addUser(_, args) {
      const addquery = await User
        .query()
        .insert({ 
          name:args.name
        });

       return addquery;
      // const handleFinish = await User
      //   .query()
      //   .where('id', args.input.id)
      
      // console.log('============================', handleFinish);
        
      // return handleFinish.pop();
      // },
      },
    async addPhone(_, args){
      const addquery = await Phone
      .query()
      .insert({
        user_id: args.input.user_id,
        phoneNumber: args.input.phoneNumber
      });
      return addquery;
       }
    }
 };

module.exports = resolvers;