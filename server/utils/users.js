const _ = require('lodash');

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var removedUsers = _.remove(this.users, (user) => user.id === id);
    return removedUsers[0];
  }

  getUser(id) {
    return _.find(this.users, {id});
  }

  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};
