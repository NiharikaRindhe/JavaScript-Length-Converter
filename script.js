function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var outputValue = document.getElementById("outputValue");

    if (isNaN(inputValue)) {
        outputValue.value = "Invalid input";
        return;
    }

    var meterValue;

    switch (fromUnit) {
        case "meter":
            meterValue = inputValue;
            break;
        case "kilometer":
            meterValue = inputValue * 1000;
            break;
        case "mile":
            meterValue = inputValue * 1609.34;
            break;
        case "centimeter":
            meterValue = inputValue / 100;
            break; // Convert centimeters to meters
    }

    var result;

    switch (toUnit) {
        case "meter":
            result = meterValue;
            break;
        case "kilometer":
            result = meterValue / 1000;
            break;
        case "mile":
            result = meterValue / 1609.34;
            break;
        case "centimeter":
            result = meterValue * 100;
            break; // Convert meters to centimeters
    }

    outputValue.value = result.toFixed(2);
}