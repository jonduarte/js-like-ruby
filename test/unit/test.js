$(document).ready(function(){
  /*
   * Core
   */
  module("Array");

  test("#each", function(){
    var array = [1, 2, 3, 4, 5];
    array.each(function(i, value){
      equal(array[i], value);
    });
  });

  test("#include", function(){
    var array = [1, 2, 3, 4, 5];
    ok(array.include(1));
    equal(false, array.include(6));
  });

  test("#blank", function(){
    var array = [1, 2, 3, 4, 5];
    equal(false, array.blank());
    ok([].blank());
    equal(false, [null, null, null].blank());
  })

  test("#any", function(){
    var array = [1, 2, null, 4];
    ok(array.any());
    equal(false, [null, null].any());
  })

  test("#all", function(){
    var array = [1, 2, null, 4];
    equal(false, array.all());
    equal(false, [null, null].all());
    ok([1, 2].all());
  })

  module("String");

  test("#empty", function(){
    ok("".empty())
    equal(false, " ".empty())
    equal(false, " something  ".empty())
  })

  test("#blank", function(){
    ok("".blank())
    ok(" ".blank())
    ok("   ".blank())
    equal(false, "something".blank())
    equal(false, " something ".blank())
  })

  test("#present", function(){
    equal(false, " ".present())
    ok(" yahha ".present())
  })

  test("#include", function(){
    ok("something".include("some"))
    equal(false, "something".include("any"))
  })
});
