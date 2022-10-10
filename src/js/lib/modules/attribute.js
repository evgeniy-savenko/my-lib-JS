import $ from '../core';

$.prototype.setAtt = function(nameAtt, valueAtt){
    for (let i = 0; i < this.length; i++) {
        if (nameAtt === '' || valueAtt === '') {
            return this;
        } else {
            this[i].setAttribute(nameAtt, valueAtt); 
        }
    }

    return this;
};

$.prototype.removeAtt = function(nameAtt){
    for (let i = 0; i < this.length; i++) {
        if (nameAtt === '') {
            return this;
        } else {
            this[i].removeAttribute(nameAtt); 
        }
    }

    return this;
};
