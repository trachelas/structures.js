'use strict';

const Stack = require('../src/stack');
const expect = require('chai').expect;

describe('stack', () => {
    it('should maintain internal array private', () => {
        let stack = new Stack();

        expect(stack.stack).to.be.undefined;
    });

    describe('length', () => {
        it('should have the stack\'s length', () => {
            let stack = new Stack();

            expect(stack.length).to.equal(0);
            stack.put(1);
            expect(stack.length).to.equal(1);
            stack.pop();
            expect(stack.length).to.equal(0);
        });
    });

    describe('put', () => {
        it('should return itself', () => {
            let stack = new Stack();

            expect(stack.put(1)).to.equal(stack);
        });

        it('should increase the stack\'s length', () => {
            let stack = new Stack();
            let prevLength = stack.length;

            stack.put(1);
            expect(stack.length).to.equal(prevLength + 1);
        });
    });

    describe('pop', () => {
        it('should return last putted element', () => {
            let stack = new Stack();

            stack.put(0).put(1);
            expect(stack.pop()).to.equal(1);
        });

        it('should decrease the stack\'s length', () => {
            let stack = new Stack();

            stack.put(1);
            let prevLength = stack.length;
            stack.pop();
            expect(stack.length).to.equal(prevLength - 1);
        });

        it('should return undefined if stack is empty', () => {
            let stack = new Stack();

            expect(stack.pop()).to.be.undefined;
        });
    });
});
