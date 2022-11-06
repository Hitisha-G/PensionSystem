// SPDX-License-Identifier:Unlicensed

pragma solidity ^0.8.0;


contract PensionSystem
{
    uint O__Id;
    uint R__Id;
    uint V__Id;


    //for the sake of simplicty I am taking Organisation OR ministry as O
    struct Org   //OrganisationORMinistry
    {
        string O_name;
        uint O_Id;
        string O_mail;
        string O_number;
        string O_password;
    
        // OStatus is for Organisation or Ministry Registration status, it tells
        // whether it is registered succesfully
        bool OStatus;
    }
    

     //for the sake of simplicty I am taking Retiree Recipient as R
    struct Retiree
    {
        string R_name;
        uint R_Id;
        string R_mail;
        string R_number;
       // string post;
        string Aadhar_no;
        string R_password;
        address R_add;
        uint total_amount;
        uint monthly_amount;
        // RStatus is for Retiree Registration status, it tells whether it is registered succesfully
        bool RStatus;
    }
    


     //for the sake of simplicty I am taking Organisation OR ministry as V
    struct Validator
    {
        string V_name;
        uint V_Id;
        string V_mail;
        string V_number;
        string V_area;
        string V_city;
        string V_state;
        string V_password;
        address V_add;
        // VStatus is for Validator Registration status, it tells whether it is registered succesfully
        bool VStatus;
        
    }
    


    //This is for Organisation or MInistry Registration Event, kind of Acknowledgement
    //and similary for Recipient and Validator
    event ORegistered(address indexed user_address,string name ,string  registration_Status);
    event RRegistered(uint Id, address indexed user_address, string name,string registration_Status );
    event VRegistered(uint Id, address indexed user_address, string name,string registration_Status );



    enum Stage {Registered,Applied,ApprovalPending, Approved,Declined, SanctionPending,Sanctioned}
    Stage public stage = Stage.Registered;



    mapping (address =>Org) public Org_details;
    
    mapping(address=> bool) registered_org;
    Org[] public all_org ;
     mapping (address =>Retiree) public Ret_details;
    
    mapping(address=> bool) registered_ret;
    
    mapping(uint => Retiree) RforValidator;
    Retiree[] public all_retiree;
    mapping (address =>Validator) public Val_details;
    
    mapping(address=> bool) registered_val;
    
    Validator[] public all_validators;

    mapping (uint => address) Mapped;
    mapping (address => bool) R_IsApproved;
    mapping (string => bool) isRegistered;
    mapping(address => Stage) stages;



    //here RegisterO stands for registration of Organisation or Ministry
    //function to register O
    function RegisterO(
        string memory _name,
        string memory _number,
        string memory _mail,
        string memory _password
       //string[] memory _posts
    ) public 
    {
        require(registered_org[msg.sender]!=true,"already registered");
        Org memory org = Org_details[msg.sender];
        O__Id ++;
        Org_details[msg.sender]=Org(_name,O__Id,_mail,_number,_password,true);
        registered_org[msg.sender]=true;
        all_org.push(org);

        emit ORegistered(msg.sender, _name ,"Organisation Registered Succesfully");

    }



    //here RegisterR stands for registration of Retiree
    //function to register R
    function RegisterR(
        string memory _name,
        string memory _number,
        string memory _mail,
        string memory _password,
        string memory _aadhar
       // string[] memory _posts
    ) public 
    {
        require(registered_ret[msg.sender]!=true,"already registered");
        
        Retiree memory retiree = Ret_details[msg.sender];
        R__Id ++;
        Ret_details[msg.sender]=Retiree(_name,R__Id,_mail,_number,_aadhar,_password,msg.sender,0,0,true);
        registered_ret[msg.sender]=true;
        isRegistered[_mail] = true;
       // enum Stage {Registered,Applied,ApprovalPending, Approved, SanctionPending,Sanctioned}
        stage = Stage.Registered;
        stages[msg.sender]=Stage.Registered;
        all_retiree.push(retiree);

        emit RRegistered(R__Id,msg.sender, _name ,"Retiree Registered Succesfully");

    }

    //here RegisterV stands for registration of Validator who will verify aadhar card and 
    //function to register Validator
    function RegisterV(
        string memory _name,
        string memory _number,
        string memory _mail,
        string memory _password,
        string memory _area,
        string memory _city,
        string memory _state
        //string memory _password
       // string[] memory _posts
    ) public 
    {
        require(registered_val[msg.sender]!=true,"already registered");
        
        Validator memory validator = Val_details[msg.sender];
        V__Id ++;
        Val_details[msg.sender]=Validator(_name,V__Id,_mail,_number,_area,_city,_state,_password,msg.sender,true);
        registered_val[msg.sender]=true;
        isRegistered[_mail] = true;
        all_validators.push(validator);

        emit VRegistered(V__Id,msg.sender, _name ,"Validator Registered Succesfully");

    }
    


    // this function will forward the approved details from the validator 
    // to organisation or Ministy so that it can further initiate the sanctioning process
    // in this step validator 
    function Approved(address _Raddress,bool _bool) public  
    {
       // require(registered_val[msg.sender]=true,"invalid validator");
        R_IsApproved[_Raddress]=_bool;
        if( R_IsApproved[_Raddress]==true)
        {
            stages[_Raddress] = Stage.Approved;
        }
        else 
        {
            stages[_Raddress] = Stage.Declined;
        }
    }


    // modifier OnlyRegistered
    // {
    //     require(!isRegistered[_email], 'This e-mail is already registered')
    //     _;
    // }
    
    
    function LoginO(string memory _email,string memory _password) public returns (bool)
    {
        require(isRegistered[_email]=true, 'This e-mail is not registered,please sign in');
        address _address=msg.sender;
      
         if( keccak256(abi.encodePacked(Org_details[_address].O_password)) == keccak256(abi.encodePacked(_password)))
        {
            return true;
        }
        else 
        {
            return false;
        }

    }
    function Org_add_details(address _address,uint _total_amount, uint _monthly_amount) public
    {
        Ret_details[_address].total_amount=_total_amount;
        Ret_details[_address].monthly_amount=_monthly_amount; 
    }


    //function Add_details(string )
    function getAllOrganisations() public view returns(Org[] memory)
    {
        return all_org;
    }
    function getAllRetiree() public view returns(Retiree[] memory)
    {
        return all_retiree;
    }
    function getAllValidator() public view returns(Validator[] memory)
    {
        return all_validators;
    }

    



}
