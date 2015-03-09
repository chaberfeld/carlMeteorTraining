if (Meteor.isServer) {
  Meteor.startup(function () {
    Answers = new Meteor.Collection("answers");

    Meteor.methods({
      addAnswer : function(answerText){
        console.log('Adding Answer ...');
        var answerId = Answers.insert({
          'answerText' : answerText,
          'submittedOn': new Date()
        });
        console.log(answerId)
        return answerId;
      },
      incrementYesVotes : function(answerID){
      console.log(answerID);
      Answers.update(answerID,{$inc : {'yes':1}});
    },
    incrementNoVotes : function(answerID){
      console.log(answerID);
      Answers.update(answerID,{$inc : {'no':1}});
    }
    });// code to run on server at startup
  });
} 
