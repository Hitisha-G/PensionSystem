import web3 from "./web3";


const address = "0xB0444525289eC8BFd238Fd8a4DC9Aa7002643245";  // pension contract

const abi2  = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "registration_Status",
				"type": "string"
			}
		],
		"name": "ORegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "registration_Status",
				"type": "string"
			}
		],
		"name": "RRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "registration_Status",
				"type": "string"
			}
		],
		"name": "VRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Raddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "Approved",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"name": "LoginO",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_total_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_monthly_amount",
				"type": "uint256"
			}
		],
		"name": "Org_add_details",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Org_details",
		"outputs": [
			{
				"internalType": "string",
				"name": "O_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "O_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "O_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "O_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "O_password",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "OStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"name": "RegisterO",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_aadhar",
				"type": "string"
			}
		],
		"name": "RegisterR",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_area",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_state",
				"type": "string"
			}
		],
		"name": "RegisterV",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Ret_details",
		"outputs": [
			{
				"internalType": "string",
				"name": "R_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "R_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "R_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "R_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Aadhar_no",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "R_password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "R_add",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "total_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "monthly_amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "RStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Val_details",
		"outputs": [
			{
				"internalType": "string",
				"name": "V_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "V_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "V_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_area",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_state",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "V_add",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "VStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "all_org",
		"outputs": [
			{
				"internalType": "string",
				"name": "O_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "O_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "O_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "O_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "O_password",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "OStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "all_retiree",
		"outputs": [
			{
				"internalType": "string",
				"name": "R_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "R_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "R_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "R_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Aadhar_no",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "R_password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "R_add",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "total_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "monthly_amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "RStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "all_validators",
		"outputs": [
			{
				"internalType": "string",
				"name": "V_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "V_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "V_mail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_area",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_state",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "V_password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "V_add",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "VStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "O_ID",
				"type": "uint256"
			}
		],
		"name": "getAllOrganisations",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "O_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "O_Id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "O_mail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "O_number",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "O_password",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "OStatus",
						"type": "bool"
					}
				],
				"internalType": "struct PensionSystem.Org",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllRetiree",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "R_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "R_Id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "R_mail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "R_number",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Aadhar_no",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "R_password",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "R_add",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "total_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "monthly_amount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "RStatus",
						"type": "bool"
					}
				],
				"internalType": "struct PensionSystem.Retiree[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllTweets",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "V_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "V_Id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "V_mail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "V_number",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "V_area",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "V_city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "V_state",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "V_password",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "V_add",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "VStatus",
						"type": "bool"
					}
				],
				"internalType": "struct PensionSystem.Validator[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "payPention",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stage",
		"outputs": [
			{
				"internalType": "enum PensionSystem.Stage",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi2, address);
