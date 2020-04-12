var mainContainer = document.getElementsByClassName('mainContainer')[0];
var defaultContainer = document.getElementsByClassName('defaultContainer')[0];
var invertedContainer = document.getElementsByClassName('invertedContainer')[0];
var pickedContainer = document.getElementsByClassName('pickedContainer')[0];
var omitContainer = document.getElementsByClassName('omitContainer')[0];

var errorMessage = document.getElementById('ErrorInput');
var productionYearInputValidation = document.getElementById('productionYearInput');
var oldTable = document.getElementsByClassName('generatedTable');
var oldPickedTable = document.getElementsByClassName('generatedPickTable');
var oldOmitTable = document.getElementsByClassName('generatedOmitTable');


// debugger
function VehicleClass(brandName, model, productionYear) {
    this.brandName = brandName;
    this.model = model;
    this.productionYear = productionYear;
}

function generateTable() {
    if (oldTable.length > 0) {
        oldTable[0].remove();
    } else if (errorMessage.style.display == 'none' || errorMessage.style.display == '') {
        var brandInput = document.getElementById('brandInput').value;
        // debugger
        var modelInput = document.getElementById('modelInput').value;
        var productionYearInput = new Number(document.getElementById('productionYearInput').value).valueOf();
        var newVehicleClass = _.create(VehicleClass.prototype, {
            brandName: brandInput,
            model: modelInput,
            productionYear: productionYearInput
        });
        var table = document.createElement('table');
        table.className = 'generatedTable';
        var tableHead = table.createTHead();
        var tableHeaderRow = tableHead.insertRow(0);
        var firstValueHeaderCell = tableHeaderRow.insertCell(0);
        var secondValueHeaderCell = tableHeaderRow.insertCell(1);
        var firstHeaderData = document.createTextNode('key');
        var secondHeaderData = document.createTextNode('value');
        firstValueHeaderCell.appendChild(firstHeaderData);
        secondValueHeaderCell.appendChild(secondHeaderData);
        var tableBody = table.createTBody();
        _.mapObject(newVehicleClass, function (val, key) {
            var tableRow = tableBody.insertRow();
            var keyCell = tableRow.insertCell(0);
            var valueCell = tableRow.insertCell(1);
            var keyData = document.createTextNode(key);
            var valueData = document.createTextNode(val);
            keyCell.appendChild(keyData);
            valueCell.appendChild(valueData);
        });
        defaultContainer.appendChild(table);
        // debugger
    }
}

function invertCellsData() {
    if (oldTable.length > 0) {
        oldTable[0].remove();

    } else if (errorMessage.style.display == 'none' || errorMessage.style.display == '') {
        var brandInput = document.getElementById('brandInput').value;
        // debugger
        var modelInput = document.getElementById('modelInput').value;
        var productionYearInput = new Number(document.getElementById('productionYearInput').value).valueOf();
        var newVehicleClass = _.create(VehicleClass.prototype, {
            brandName: brandInput,
            model: modelInput,
            productionYear: productionYearInput
        });
        var invertedObject = _.invert(newVehicleClass);
        console.log(invertedObject);
        var table = document.createElement('table');
        table.className = 'generatedTable';
        var tableHead = table.createTHead();
        var tableHeaderRow = tableHead.insertRow(0);
        var secondValueHeaderCell = tableHeaderRow.insertCell(0);
        var firstValueHeaderCell = tableHeaderRow.insertCell(1);
        var firstHeaderData = document.createTextNode('key');
        var secondHeaderData = document.createTextNode('value');
        firstValueHeaderCell.appendChild(firstHeaderData);
        secondValueHeaderCell.appendChild(secondHeaderData);
        var tableBody = table.createTBody();
        _.mapObject(invertedObject, function (val, key) {
            var tableRow = tableBody.insertRow();
            var keyCell = tableRow.insertCell(0);
            var valueCell = tableRow.insertCell(1);
            var keyData = document.createTextNode(key);
            var valueData = document.createTextNode(val);
            keyCell.appendChild(keyData);
            valueCell.appendChild(valueData);
        });
        invertedContainer.appendChild(table);
        // debugger
    }
}
var buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.style.cssText = 'transform:scale(1.05)';
        setTimeout(() => {
            e.target.style.cssText = 'transform:scale(1)';
        }, 200)
    }), false
});

function generatePickTable() {
    if (oldPickedTable.length > 0) {
        oldPickedTable[0].remove();

    } else if (errorMessage.style.display == 'none' || errorMessage.style.display == '') {
        var brandInput = document.getElementById('brandInput').value;
        // debugger
        var modelInput = document.getElementById('modelInput').value;
        var productionYearInput = new Number(document.getElementById('productionYearInput').value).valueOf();
        var newVehicleClass = _.create(VehicleClass.prototype, {
            brandName: brandInput,
            model: modelInput,
            productionYear: productionYearInput
        });
        var pickedVehicleClass = _.pick(newVehicleClass, 'brandName', 'productionYear');
        var table = document.createElement('table');
        table.className = 'generatedPickTable';
        var tableHead = table.createTHead();
        var tableHeaderRow = tableHead.insertRow(0);
        var firstValueHeaderCell = tableHeaderRow.insertCell(0);
        var secondValueHeaderCell = tableHeaderRow.insertCell(1);
        var firstHeaderData = document.createTextNode('key');
        var secondHeaderData = document.createTextNode('value');
        firstValueHeaderCell.appendChild(firstHeaderData);
        secondValueHeaderCell.appendChild(secondHeaderData);
        var tableBody = table.createTBody();
        _.mapObject(pickedVehicleClass, function (val, key) {
            var tableRow = tableBody.insertRow();
            var keyCell = tableRow.insertCell(0);
            var valueCell = tableRow.insertCell(1);
            var keyData = document.createTextNode(key);
            var valueData = document.createTextNode(val);
            keyCell.appendChild(keyData);
            valueCell.appendChild(valueData);
        });
        pickedContainer.appendChild(table);
        // debugger
    }
};

function generateOmitTable() {
    if (oldOmitTable.length > 0) {
        oldOmitTable[0].remove();
        // debugger

    } else if (errorMessage.style.display == 'none' || errorMessage.style.display == '') {
        var brandInput = document.getElementById('brandInput').value;
        // debugger
        var modelInput = document.getElementById('modelInput').value;
        var productionYearInput = new Number(document.getElementById('productionYearInput').value).valueOf();
        var newVehicleClass = _.create(VehicleClass.prototype, {
            brandName: brandInput,
            model: modelInput,
            productionYear: productionYearInput
        });
        var omitVehicleClass = _.omit(newVehicleClass, 'model');
        var table = document.createElement('table');
        table.className = 'generatedOmitTable';
        var tableHead = table.createTHead();
        var tableHeaderRow = tableHead.insertRow(0);
        var firstValueHeaderCell = tableHeaderRow.insertCell(0);
        var secondValueHeaderCell = tableHeaderRow.insertCell(1);
        var firstHeaderData = document.createTextNode('key');
        var secondHeaderData = document.createTextNode('value');
        firstValueHeaderCell.appendChild(firstHeaderData);
        secondValueHeaderCell.appendChild(secondHeaderData);
        var tableBody = table.createTBody();
        _.mapObject(omitVehicleClass, function (val, key) {
            var tableRow = tableBody.insertRow();
            var keyCell = tableRow.insertCell(0);
            var valueCell = tableRow.insertCell(1);
            var keyData = document.createTextNode(key);
            var valueData = document.createTextNode(val);
            keyCell.appendChild(keyData);
            valueCell.appendChild(valueData);
        });
        omitContainer.appendChild(table);
        // debugger
    }
};



productionYearInputValidation.addEventListener('focusout', () => {
    var productionYearInput = new Number(document.getElementById('productionYearInput').value).valueOf();
    if (productionYearInput == '' || productionYearInput < 1900 || productionYearInput > 2021) {
        errorMessage.style.display = 'block';
        productionYearInputValidation.style.backgroundColor = 'lightcoral';
        productionYearInputValidation.style.color = 'black';
        productionYearInputValidation.focus();
    } else {
        errorMessage.style.display = 'none';
        productionYearInputValidation.style.backgroundColor = 'beige';
        productionYearInputValidation.style.color = 'grey';
    }
})