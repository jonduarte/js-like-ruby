;Array.prototype.each = function(block){
    for(var i = 0; i < this.length; i++){
        block(i, this[i]);
    }
};

Array.prototype.include = function(value){
    for(var i = 0; i < this.length; i++){
        if(this[i] === value) return true;
    }
    return false;
};

