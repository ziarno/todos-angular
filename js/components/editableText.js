todos.directive('editableText', function () {
  return {
    scope: {
      text: '=',
    },
    restrict: 'E',
    template: `
      <span class="editable-text">
        <button-input
          ng-show="isEditMode"
          model="text"
          button-icon="ok"
          on-button-press="setEditMode(false)"
        />
        <span
          ng-dblclick="setEditMode(true)"
          ng-hide="isEditMode"
        >
          {{text}}
        </span>
      </span>
    `,
    controller: function EditableTextCtrl($scope) {
      $scope.setEditMode = function (isEdit) {
        $scope.isEditMode = isEdit
      }
    }
  }
})