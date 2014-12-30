if (Meteor.isClient) {
        Accounts.ui.config({
                passwordSignupFields: "USERNAME_AND_EMAIL"
        });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.configure({
  // the default layout
  layoutTemplate: 'mainLayout'
});

Router.route('/', function () {
  // set the layout programmatically
  this.layout('mainLayout');

  this.render('defaultPage');
});

['Dashboard', 'Tasks', 'Contacts', 'FAQs'].forEach(function (section) {
        Router.route('/' + section , function () {
                // set the layout based on a reactive session variable
                this.layout(Session.get('layout') || 'mainLayout');

                // render the PageTwo template
                this.render(section);
        });
});

