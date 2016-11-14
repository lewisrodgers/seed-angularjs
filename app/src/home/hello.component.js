export default {
  controller: function() {
    let vm = this;
    vm.message = 'Hello world!';
  },
  template: '<h1>{{ $ctrl.message }}</h1>',
};
