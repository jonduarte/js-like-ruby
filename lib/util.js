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

Array.prototype.uniq = function(){
  var result = [];
  for(var i = 0; i < this.length; i++){
    if(!result.include(this[i])){
      result.push(this[i]);
    }
  }
  return result;
};

/**
 * String Core Functions
 */
String.prototype.blank = function(){
  return !!this.match(/^\s*$/)
}

String.prototype.present = function(){
  return !this.blank();
};

String.prototype.include = function(sub){
  return this.indexOf(sub) != -1
};

String.prototype.empty = function(){
  return this.length == 0;
};

String.prototype.truncate = function(length, truncate_str){
  length || (length = 30);
  truncate_str || (truncate_str = '...');
  if(this.length <= length){
    return this;
  }
  if(this.blank()){
    return "";
  }else{
    var sliced = this.substring(0, length - truncate_str.length) + truncate_str;
    return sliced;
  }
};

/**
 * Date Core Functions
 */
Date.today = function(){
  return new Date();
}

/**
 * Number Core Functions
 */
Number.MILLI_DAY = 86400000;

/**
 * Returns the total number of
 * milliseconds of some day
 *
 * Ex:
 *  1.day() #=> 86400000
 *  2.day() #=> 172800000
 */
Number.prototype.day = function(){
  return this * Number.MILLI_DAY
}

/**
 * Returns the previous date
 *
 * Ex:
 *  var num = 1
 *  num.day().ago() or
 *   1..day().ago() or
 *  (1).day().ago()
 *
 */
Number.prototype.ago = function(){
  return new Date(new Date().getTime() - this)
}
