todos.filter('viewMode', function () {
  return function (items, mode) {
    return items.filter(function (item) {
      var modeMap = {
        all: true,
        incomplete: !item.isComplete,
        complete: item.isComplete
      }
      return modeMap[mode]
    })
  }
})
