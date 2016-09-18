var itemizeList = function(txtList)
{
  if (!txtList)
  {
    result=0;
  }
  else
  {
    var temp = txtList.split(",");
    var result = temp.length;
  };
  return result;
};

var assess = function(numItems)
{
  if (numItems < 1)        { resp = "Please enter data first." }
  else if (numItems > 3)   { resp = "Too much!" }
  else                     { resp = "Enjoy!" };
  return resp;
};

angular.module('LunchChecker', [])
.controller('LunchCheckerController', function($scope) {
  $scope.checkHowMuch = function () {
    var numberOfItems = itemizeList($scope.inputList);
    $scope.response = assess(numberOfItems);
  }
});
