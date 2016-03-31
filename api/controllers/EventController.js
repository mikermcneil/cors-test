/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
  'signup': function (req, res) {
    res.view();
  },

  create: function (req, res) {
    sails.log('Triggered `create` action of `EventController`');
    return res.redirect("/event/loggedin");
  },
    
  loggedin: function (req, res) {
    sails.log('Triggered `loggedin` action of `EventController`');
    return res.view();
  }

};

