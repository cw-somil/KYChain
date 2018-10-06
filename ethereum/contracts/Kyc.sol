pragma solidity ^0.4.17;

contract KycFactory {
    address[] public deployedkyc;

    function createKyc(string name, string user_address, string age, string gender, string imagelink) public {
        address newKyc = new Kyc(name, user_address, age, gender, imagelink, msg.sender);
        deployedkyc.push(newKyc);
    }

    function getDeployedkyc() public view returns (address[]) {
        return deployedkyc;
    }
}

contract Kyc {

    string user_name;
    string useraddress;
    string user_age;
    string user_gender;
    string user_imagelink;

    address public manager;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Kyc(string name,string user_address, string age, string gender, string imagelink,address creator) public {
        manager = creator;

        user_name = name;
        useraddress = user_address;
        user_age = age;
        user_gender = gender;
        user_imagelink = imagelink;

    }

    function viewdetails() public view returns(string, string, string, string, string){
        require(msg.sender == manager);
        return (user_name,useraddress,user_age,user_gender,user_imagelink);
    }


}
