todos.component('todos', {
  template: `
    <div class="todos">
      <h3 class="todos__title">{{title}}</h3>
      <button
        ng-if="currentList"
        ng-click="hideList()"
        class="todos__back btn btn-default btn-sm">
        <span class="glyphicon glyphicon-arrow-left" />
        Back
      </button>
      <div class="todos__inputs">
        <button-input
          container-class="todos__add-item-input"
          model="addInputText"
          placeholder="{{addInputPlaceholder}}"
          button-text="Add"
          button-icon="plus"
          on-button-press="add()"
        />
        <input
          class="form-control"
          placeholder="Search"
          ng-model="searchQuery"
        />
      </div>
      <lists
        ng-if="!currentList"
        search-query="searchQuery"
        lists-items="lists"
      />
      <list
        ng-if="currentList"
        search-query="searchQuery"
        list-data="currentList"
      />
      <small class="todos__hint">
        Hint: double-click a list item to edit it.
      </small>
    </div>
  `,
  controller: function AppCtrl($scope) {
    $scope.lists = []
    $scope.addInputText = ''
    $scope.currentList = null
    
    function addList() {
      $scope.lists.push({
        id: _.uniqueId(),
        type: 'todo-list',
        title: $scope.addInputText,
        items: []
      })
      $scope.addInputText = ''
    }

    function addItemToList() {
      $scope.currentList.items.push({
        id: _.uniqueId(),
        type: 'todo-item',
        title: $scope.addInputText,
        isComplete: false
      })
      $scope.addInputText = ''
    }

    function removeItem(e, id) {
      $scope.currentList.items.removeById(id)
    }

    function removeList(e, id) {
      $scope.lists.removeById(id)
    }

    function showList(e, id) {
      $scope.currentList = _.find($scope.lists, function (list) {
        return list.id === id
      })
    }

    $scope.add = function () {
      if (!$scope.addInputText.length) {
        return
      }
      $scope.currentList ? addItemToList() : addList()
    }

    $scope.hideList = function () {
      $scope.currentList = null
    }

    $scope.$on('list:remove', removeList)
    $scope.$on('list:show', showList)
    $scope.$on('item:remove', removeItem)

    $scope.$watch('currentList', function (list) {
      $scope.title = list ? list.title : 'Todo lists'
      $scope.addInputPlaceholder = list ? 'Todo name' : 'List name'
    })

  }
})