This
====

# Order

    1. New binding          var bar = new foo()
    2. Explicit binding     var bar = foo.call(obj)
    3. Implicit binding     var bar = obj.foo()
    4. Default binding      var bar = foo()
    
    
# Exceptions

If you pass `null` or `undefined` on `call`, `apply`, `bind`, like `foo.call(null)`,
default binding applies.

Arrow binding is bound to lexical `this` scope, it has the `this` of
the enclosing scope (function or global)