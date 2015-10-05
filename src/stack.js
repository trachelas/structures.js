'use strict';

function Stack() {
    let stack = [];

    this.length = 0;
    this.put = function(el) {
        stack.push(el);
        this.length++;

        return this;
    };

    this.pop = function() {
        if (this.length > 0) {
            this.length--;
            return stack.pop();
        }
    };
}

module.exports = Stack;
