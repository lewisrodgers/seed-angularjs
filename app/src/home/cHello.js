export default {
  controller: function() {
    let v = this;
    v.message = 'Hello world!';
  },
  template: `
  <h1>{{ $ctrl.message }}</h1>
  `,
};
