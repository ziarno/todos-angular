todos.directive ('buttonInput', function () {
  return {
    restrict: 'E',
    scope: {
      model: '=',
      placeholder: '@',
      buttonText: '@',
      buttonIcon: '@',
      containerClass: '@',
      onButtonPress: '&',
    },
    template: `
      <form
        ng-submit="onButtonPress()"
        ng-class="containerClass"
      >
        <div class="input-group">
          <input 
            type="text" 
            class="form-control" 
            ng-model="model" 
            placeholder="{{placeholder}}"
          />
          <span class="input-group-btn">
            <button
              ng-click="onButtonPress"
              class="btn btn-default"
            >
              <span
                ng-if="buttonIcon"
                ng-class="glyphicon-${buttonIcon}" 
                class="glyphicon"
              />
              {{buttonText}}
            </button>
          </span>
        </div>
      </form>
    `
  }
})