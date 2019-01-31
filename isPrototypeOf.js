
//two solutions 1.go through proto property and compare it to properties of prototypeObject.
//2.Object.getPrototypeOf() nvm it totally does
//Needs recursion
function isProtoTypeOf(prototypeObject, object){
  if(arguments.length<2) return false;
  var prototypeOfObject = Object.getPrototypeOf(object)
  if(prototypeOfObject !== null){

    if(prototypeOfObject === prototypeObject){
      return true
    }
    if(Object.getPrototypeOf(prototypeOfObject) !== null){
      return isProtoTypeOf(prototypeObject, prototypeOfObject)
    }
  }
  return false;
}
