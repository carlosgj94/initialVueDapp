pragma solidity 0.4.25;


contract SupplyChain {
    struct Package {
        address sender;
        address receiver;
        address[9] transporters;
        string packageName;
        string senderName;
        string receiverName;
        string originAddress;
        string finalAddress;
    }

    Package[] public packages;

    function getPackageStrings(uint _package) 
    public
    view
    returns(
        string,
        string,
        string,
        string,
        string
    )
    {
        return (
            packages[_package].packageName,
            packages[_package].senderName,
            packages[_package].receiverName,
            packages[_package].originAddress,
            packages[_package].finalAddress
        );
    }

    function getPackageData(uint _package) 
    public
    view
    returns(
        address,
        address,
        address[9]
    )
    {
        return (
            packages[_package].sender,
            packages[_package].receiver,
            packages[_package].transporters
        );
    }

    function createPackage(
        string _packageName,
        string _senderName,
        string _receiverName,
        string _originAddress,
        string _finalAddress,
        address _receiver
    ) public returns (uint) {
        address[9] memory _transporters;
        Package memory _package = Package({
            sender: msg.sender,
            receiver: _receiver,
            transporters: _transporters,
            packageName: _packageName,
            senderName: _senderName,
            receiverName: _receiverName,
            originAddress: _originAddress,
            finalAddress: _finalAddress
        });

        return packages.push(_package);
    }

    function addTransporter(uint _package, uint _pos) public {
        require(_pos < 10);
        packages[_package].transporters[_pos] = msg.sender;
    }
}
