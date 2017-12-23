(function(){
    angular.module("testComparaOnline", [])
        .controller("principal", ["$scope", principal]);

    function principal($scope){
        var carInsurance = new CarInsurance([
            new Product("Medium Coverage", 15, 20),
            new Product("Full Coverage", 2, 0),
            new Product("Low Coverage", 5, 7),
            new Product("Mega Coverage", 0, 80),
            new Product("Mega Coverage", -1, 80),
            new Product("Special Full Coverage", 15, 20),
            new Product("Special Full Coverage", 10, 49),
            new Product("Special Full Coverage", 5, 49),
            new Product("Super Sale", 2, 6)
        ]);
        console.log("Hello");

        for(var i = 0; i<30; i++){
            console.log(mediumCoverage);
            carInsurance.updatePrice();
        }
    }
})();