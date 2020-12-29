/**
 * Một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var fs = require("fs");
var readlineSync = require('readline-sync');
var dataJS = JSON.parse(fs.readFileSync("data.json"));
//, {encoding: 'utf8'}

function save(){
   fs.writeFileSync("data.json",JSON.stringify(dataJS));
}
function showMenu(){
    console.log("1. Create a new contact");
    console.log("2. Edit contact information by name");
    console.log("3. Delete contact");
    console.log("4. Search contact by name");
    console.log("5. Exit")
    var result = readlineSync.question("> ");
    console.log("======================")

    switch (result){
        case "1":
        createAndSaveContact();
        showMenu();
        break;
        case "2":
        editContact();
        showMenu();
        break;
        case "3":
        deleteContact();
        showMenu();
        break;
        case "4":
        searchContact();
        case "5":
        break;
        default:
        console.log("Please type 1, 2, 3, 4 or 5 only!")
        showMenu();
        break;
    }

}

function createAndSaveContact(){
    var name = readlineSync.question("Contact name: ");
    var phone = readlineSync.question("Contact number: ");
    var contact = {
        name: name,
        phone: parseInt(phone)
    }
    dataJS.push(contact);
    // fs.writeFileSync("data.json",JSON.stringify(dataJS));
    save();
    console.log(".....Saved!");
    console.log("====================");
}

function editContact(){
   console.log(dataJS)
   console.log("Whose contact do you want to edit?");
    var editedName = readlineSync.question("Name: ")

    for (var i in dataJS){
        var check = true;

        if (editedName === dataJS[i].name){
            var editedNumber = readlineSync.question(editedName +" New number: ");
            dataJS[i].phone = editedNumber;
            save();
            check = false;
            console.log("Edited.....Saved!");
            console.log("====================");
            break;
        } 
    }

    if (check){
   console.log("Wrong name");
   console.log("====================");
   
       }
    
}

function deleteContact(){
   console.log(dataJS)
   console.log("Whose contact do you want to delete?");
    var deletedName = readlineSync.question("Name: ")
    var check = true;
    for (var i in dataJS){
        

        if (dataJS[i].name === deletedName){

            dataJS.splice(dataJS[i],1);
            save();
            check = false;
            console.log("Deleted.....Saved!");
            console.log("====================");
            break;
        } 
    }	
    
    if (check){
   console.log("Wrong name");
   console.log("====================");
    }
}

// function searchContact(){

//  }

showMenu();