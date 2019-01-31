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
