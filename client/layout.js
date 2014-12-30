Template.mainLayout.helpers({
        gravatar: function () {
                return CryptoJS.MD5(Meteor.user().emails[0].address).toString();
        },
        admincats: [
                { name: "Dashboard", icon: "tachometer"},
                { name: "Tasks",     icon: "check-square-o"},
                { name: "Contacts",  icon: "user"},
                { name: "FAQs",      icon: "life-ring"}
        ]
});
Template.mainLayout.events({
        "click .admincat": function (event) {
                $('.admincat').removeClass('active');
                $(event.target).parent().addClass('active');
        }
});
