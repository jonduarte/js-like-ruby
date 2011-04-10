;Array.prototype.each = function(block){
    for(var i = 0; i < this.length; i++){
        block(i, this[i]);
    }
};

