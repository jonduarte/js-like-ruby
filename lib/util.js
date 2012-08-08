/**
 * Array Core Functions
 */
Array.prototype.each = function(block){
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

Array.prototype.blank = function(){
  if(this.length == 0){
    return true;
  }

  return false;
};

Array.prototype.any = function(){
  if(!this.blank()){
    for(var i = 0; i < this.length; i++){
      if(!!this[i]) return true;
    }
  }
  return false;
};

Array.prototype.all = function(){
  if(!this.blank()){
    for(var i = 0; i < this.length; i++){
      if(!this[i]) return false;
    }
  }
  return true;
};

/**
 * String Core Functions
 */
String.prototype.blank = function(){
  return !!this.match(/^\s*$/)
}

String.prototype.present = function(){
  return !this.blank()
}

String.prototype.include = function(sub){
  return this.indexOf(sub) != -1
}

String.prototype.empty = function(){
  return this.length == 0;
}
