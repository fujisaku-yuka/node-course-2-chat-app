const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'yuka';
    const text = 'hello';

    var res = generateMessage(from, text);
    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'yuka';
    const latitude = 1;
    const longitude = 1

    var res = generateLocationMessage(from, latitude, longitude);
    expect(res).toInclude({from, url: 'https://www.google.com/maps?q=1,1'});
    expect(res.createdAt).toBeA('number');
  });
});
