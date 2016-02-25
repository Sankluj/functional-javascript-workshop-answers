function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // Return false as soon as an invalid user is found
    return submittedUsers.every(function (submittedUser) {
      // Return true as soon as a matched user is found
      return goodUsers.some(function (goodUser) {
        return goodUser.id === submittedUser.id;
      })
    });
  };
}

module.exports = checkUsersValid;
