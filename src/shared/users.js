
// User data
//     _id                   Not input - hidden
//     name:                input type text
//     email:               input type email
//     password:            input type password
//     ZIP:                 input type text
//     phone:               input type text
//     dogsOwned: [          Not input - hidden
//          {
//              "_id":"fjfjfjjf"
//          }
//      ]
//     dogsFavorited: [          Not input - hidden
//          {
//              "_id":"fjfjfjjf"
//          }
//      ]
//      "ownerNameSwitch":"",                   input type boolean
//      "ownerAddressSwitch":"",                input type boolean
//      "ownerPhoneSwitch": ""                  input type boolean
//      "contactVetName":"PAC Animal Hospital", input type string
//      "contactVetAddress":"123 Test Street",  input type string
//      "contactVetPhone": "4101234567",        input type number
//      "contactEVetName":"Emergency Animal Hospital", input type string
//      "contactEVetAddress":"456 Test Street",  input type string
//      "contactEVetPhone": "4109876543",       input type number
//     ]



export const USERS = [
    {
    "_id":"1",
    "name":"dan",
    "email":"dan.z.haas@gmail.com",
    "password":"password",
    "ZIP":21202,
    "phone":4109372073,
    "dogsOwned": [
        {
            "dogId":"suede"
        }
    ],
    "dogsFavorited": [
        {
            "dogId":"boh"
        },
        {
            "dogId":"cato"
        }
    ],
    "contactOwnerNameSwitch":"true",
    "contactOwnerAddressSwitch":"true",
    "contactOwnerPhoneSwitch": "true",
    "contactVetName":"PAC Animal Hospital",
    "contactVetAddress":"123 Test Street",
    "contactVetPhone": "4101234567",
    "contactEVetName":"Emergency Animal Hospital",
    "contactEVetAddress":"456 Test Street",
    "contactEVetPhone": "4109876543",
    }
]