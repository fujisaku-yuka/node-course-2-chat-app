const expect = require('expect');
const _ = require('lodash');

var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Yuka',
      room: 'Node Course'
    }, {
      id: 2,
      name: 'Yuki',
      room: 'React Course'
    }, {
      id: 3,
      name: 'Yuko',
      room: 'Node Course'
    }];
  })

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 1,
      name: 'Yuka',
      room: 'the room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var removedUser = users.removeUser(3);
    expect(removedUser).toInclude({name: 'Yuko'});
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var removedUser = users.removeUser(4);
    expect(removedUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var user = users.removeUser(2);
    expect(user).toInclude({name: 'Yuki'});
  });

  it('should not find a user', () => {
    var user = users.removeUser(5);
    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Yuka', 'Yuko']);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Yuki']);
  });
});
