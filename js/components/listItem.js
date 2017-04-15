todos.directive('listItem', function () {
  return {
    restrict: 'E',
    scope: {
      listItem: '='
    },
    template: `
      <li class="list-item">
        <input
          type="checkbox"
          ng-model="listItem.isComplete"
        />
        <editable-text
          class="list-item__text"
          text="listItem.title"
        />
        <button
          ng-click="removeItem()"
          class="btn btn-danger btn-sm">
          <span class="glyphicon glyphicon-remove" />
        </button>
      </li>
    `,
    controller: function ListItemCtrl($scope) {
      $scope.removeItem = function () {
        $scope.$emit('item:remove', $scope.listItem.id)
      }
    }
  }
})