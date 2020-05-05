import Click from './click'
export default options=> ({
  install(vm) {
    vm.directive('click', Click(options))
  }
})