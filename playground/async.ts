let displayName: string = "Standing desk";
let trackingNumber: string = "FD12345";
let createDate: Date = new Date();
let originalCost: number = 425;

interface inventoryItem{
  displayName: string;
  inventoryType: inventoryType;
 trackingNumber: string;
 createDate: Date;
 originalCost: number;
}

enum inventoryType {
  Computer = "computer",
  Furniture = "furniture"
}

function getInventoryItem(trackingNumber: string):inventoryItem {
  return null;
}

function saveInventoryItem(item:inventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

interface read{
  (name:string):string;
}

const test: read = (value:string):string =>{
  console.log(value);
  return "Done";
}

test("Interface implemented");

saveInventoryItem({
  displayName: "Macbook Pro Retina",
  inventoryType: inventoryType.Computer,
  trackingNumber: "FD12345",
  createDate: new Date(),
  originalCost: 425

})