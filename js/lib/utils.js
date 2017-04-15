Array.prototype.removeById = function (id) {
  var index = _.findIndex(this, function (obj) {
    return obj.id === id
  })
  if (index > -1) {
    this.splice(index, 1)
  }
}