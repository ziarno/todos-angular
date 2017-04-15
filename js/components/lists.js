todos.directive('lists', function () {
  return {
    restrict: 'E',
    scope: {
      listsItems: '=',
      searchQuery: '=',
    },
    template: `
      <ul class="list-group">
        <lists-item
          class="list-group-item"
          ng-repeat="listsItem in listsItems | filter:searchQuery"
          lists-item="listsItem"
        />
        <p
          ng-if="listsItems.length === 0"
          class="empty"
        >
          List is empty
        </p>
      </ul>
    `
  }
})