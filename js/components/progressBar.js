todos.directive('progressBar', function () {
  return {
    restrict: 'E',
    scope: {
      progress: '='
    },
    template: `
      <div class="progress">
        <div
          class="progress-bar"
          ng-style="{width: progressPercent}"
        >
          {{progressPercent}}
        </div>
      </div>
    `,
    controller: function PropgressBarCtrl($scope) {
      $scope.$watch('progress', function (progress) {
        $scope.progressPercent = progress ?
          Math.round(progress * 100) + '%' : '0%'
      })
    }
  }
})