todos
  .directive('list', function () {
  return {
    restrict: 'E',
    scope: {
      listData: '=',
      searchQuery: '=',
    },
    template: `
      <div class="list__controls">
        <div class="btn-group">
          <button
            ng-class="{active: mode === 'all'}"
            ng-click="setViewMode('all')"
            class="btn btn-default"
          >
            All
          </button>
          <button
            ng-class="{active: mode === 'incomplete'}"
            ng-click="setViewMode('incomplete')"
            class="btn btn-default"
          >
            <span class="glyphicon glyphicon-unchecked" />
            Incomplete
          </button>
          <button
            ng-class="{active: mode === 'complete'}"
            ng-click="setViewMode('complete')"
            class="btn btn-default"
          >
            <span class="glyphicon glyphicon-check" />
            Complete
          </button>
        </div>
        <progress-bar
          class="list__progress"
          progress="progress"
        />
      </div>
      <ul class="list-group">
        <list-item
          class="list-group-item"
          ng-repeat="listItem in listData.items | filter:searchQuery | viewMode:mode"
          list-item="listItem"
        />
        <p
          ng-if="listData.items.length === 0"
          class="empty"
        >
          List is empty
        </p>
      </ul>
    `,
    controller: function ListCtrl($scope) {
      $scope.mode = 'incomplete'
      $scope.setViewMode = function (mode) {
        $scope.mode = mode
      }
      $scope.$watch('listData.items', function (items) {
        var completedCount = items.filter(function (item) {
          return item.isComplete
        }).length

        $scope.progress = completedCount / items.length
      }, true)
    }
  }
})