var displayName = "Standing desk";
var trackingNumber = "FD12345";
var createDate = new Date();
var originalCost = 425;
var inventoryType;
(function (inventoryType) {
    inventoryType["Computer"] = "computer";
    inventoryType["Furniture"] = "furniture";
})(inventoryType || (inventoryType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
var test = function (value) {
    console.log(value);
    return "Done";
};
test("Interface implemented");
saveInventoryItem({
    displayName: "Macbook Pro Retina",
    inventoryType: inventoryType.Computer,
    trackingNumber: "FD12345",
    createDate: new Date(),
    originalCost: 425
});
