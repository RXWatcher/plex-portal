Meteor.publishComposite('servers', function(){
  return {
    find: function(){
      return Servers.find({available: true}, { sort: { createdAt: -1 }});
    }
  };
});