function getDependencies(tree) {
  if (!tree) return [];

  var depArray = [];

  return function processPackageDependencies(dependencies) {
    if (!dependencies) return [];

    Object.keys(dependencies).forEach(function (packageKey) {
      var packageInfos = dependencies[packageKey];
      var packageString = packageKey + "@" + packageInfos.version;
      if (depArray.indexOf(packageString) < 0) depArray.push(packageString);

      if (!!packageInfos.dependencies) {
        processPackageDependencies(packageInfos.dependencies);
      }
    });

    return depArray.sort();
  }(tree.dependencies)
}

function getDependenciesOfficial(mod, result) {
  result = result || []
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies
