var SimpleSet = require('./index');
var mocha = require('mocha');
var chai = require("chai");
var expect = chai.expect;

describe('set', function(){
  it('should remove elements from set', function(){
    var set = new SimpleSet();

    set.add('some-new-element');
    set.add('some-other-element');
    set.add('another-element');
    set.add('');

    set.remove('');
    set.remove('some-new-element');

    expect(set.keys().indexOf('some-other-element')).to.not.equal(-1);
    expect(set.keys().indexOf('another-element')).to.not.equal(-1);
    expect(set.keys().indexOf('')).to.equal(-1);
    expect(set.keys().indexOf('some-new-element')).to.equal(-1);
  });
  it('should add different elements without repetitions', function(){
    var set = new SimpleSet();

    set.add('element1');
    set.add('element2');
    set.add('element1');
    set.add('element1');

    expect(set.keys().length).to.equal(2);
    expect(set.keys().indexOf('element1')).to.not.equal(-1);
    expect(set.keys().indexOf('element2')).to.not.equal(-1);
  });
  it('should add multiple elements in single call without repetitions', function(){
    var set = new SimpleSet();

    set.bulkAdd(['el1', 'el2', 'el3', 'el2', 'el1']);

    expect(set.keys().length).to.equal(3);
    expect(set.keys().indexOf('el1')).to.not.equal(-1);
    expect(set.keys().indexOf('el2')).to.not.equal(-1);
    expect(set.keys().indexOf('el3')).to.not.equal(-1);
  });
  it('should show an element exists or not', function(){
    var set = new SimpleSet();

    set.add('el1');
    set.add('el2');
    set.add('el3');

    expect(set.has('el5')).to.equal(false);

    set.add()

    expect(set.has('el2')).to.equal(true);
  });
});