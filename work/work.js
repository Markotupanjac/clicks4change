Count = new Meteor.Collection('count');
if (Meteor.isClient) {
  Template.main.events({
    'click .submit': function(){
      var numClick = document.getElementById("clicks");
      numClick.innerHTML = parseInt(Count.find().fetch()[0].num);
      var clicks = parseInt(numClick.innerHTML);
      clicks +=1;
      numClick.innerHTML = clicks
      Count.update({_id: "LCbJcpqTowzWTzARz"}, {num: numClick.innerHTML})
    }
  })
}
if (Meteor.isServer) {
 
}

