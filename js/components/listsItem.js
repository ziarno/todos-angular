todos.directive('listsItem', function () {
  return {
    restrict: 'E',
    scope: {
      listsItem: '='
    },
    template: `
      <li class="lists-item">
        <editable-text
          class="lists-item__text"
          text="listsItem.title"
        />
        <span class="label label-default">
          {{itemsCount}}
        </span>
        <button
          ng-click="showList()"
          class="btn btn-default btn-sm">
          Show
        </button>
        <button
          ng-click="removeList()"
          class="btn btn-danger btn-sm">
          <span class="glyphicon glyphicon-remove" />
        </button>
      </li>
    `,
    controller: function ListsItemCtrl($scope) {
      $scope.removeList = function () {
        $scope.$emit('list:remove', $scope.listsItem.id)
      }
      $scope.showList = function () {
        $scope.$emit('list:show', $scope.listsItem.id)
      }
      $scope.itemsCount = $scope.listsItem.items.length
    }
  }
})