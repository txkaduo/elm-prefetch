Elm.Native.Prefetch = {};
Elm.Native.Prefetch.make = function(localRuntime) {
  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Prefetch = localRuntime.Native.Prefetch || {};
  if (localRuntime.Native.Prefetch.values)
  {
    return localRuntime.Native.Prefetch.values;
  }

  var Task = Elm.Native.Task.make(localRuntime);
  var Utils = Elm.Native.Utils.make(localRuntime);

  function image(path)
  {
    return Task.asyncFunction(function(callback) {
      var image = new Image();
      image.src = path;
      image.onload = function() {
        callback(Task.succeed(Utils.Tuple0));
      }
      image.onerror = function() {
        callback(Task.fail("load image fail"));
      }
    });
  }

  return {
    image: image
  };
}
