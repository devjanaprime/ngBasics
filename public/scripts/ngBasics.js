var myApp = angular.module( 'myApp', [] );

myApp.controller( 'TestController', function(){
  console.log( 'NG' );
  var vm = this;
  vm.allThings = [];

  vm.testyClick = function(){
    vm.allThings.push( { name: vm.input0, url: vm.input1 } );
    console.log( 'testyClick, input0:', vm.input0, vm.allThings );
    vm.input0 = '';
    vm.input1 = '';
  }; // end testyClick

}); // end TestController
