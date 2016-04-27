'use strict';

var Provider = function() {
  let name = 'Provider';

  const implementation = {
    asService: ' working as a Service',
    asFactory: ' working as a Factory',
    asProvider: ' working as a Provider'
  }

  const run = (implementationKind) => {
    return name.concat(implementationKind);
  }

  this.$get = () => {
    return name.concat(implementation.asProvider);
  }

  this.runningLog = run(implementation.asService);

  return name.concat(implementation.asFactory);
};

export default Provider;
