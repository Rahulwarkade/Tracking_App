import React from 'next'
import { MdDone } from "react-icons/md";
import axios from '@/utils/axios'


const Orders:React.FC = ()=>{

    const data = {
        "statusCode": 200,
        "statusFlag": true,
        "status": "SUCCESS",
        "version": null,
        "errorDetails": null,
        "trackHeader": {
            "strShipmentNo": "7D101179101",
            "strRefNo": "5103",
            "strCNType": "CPDP",
            "strCNTypeCode": "IF456",
            "strCNActCustCode": "IO1421",
            "strCNTypeName": "AWADHPURI - SAMANWAY NAGAR",
            "strCNProduct": "STANDARD",
            "strModeCode": null,
            "strMode": null,
            "strCNProdCODFOD": "NDX",
            "strOrigin": "BHOPAL",
            "strOriginRemarks": "Booked By",
            "strBookedDate": "09102024",
            "strBookedTime": "22:03:06",
            "strPieces": "1",
            "strWeightUnit": null,
            "strWeight": null,
            "strDestination": "PANCHKULA",
            "strStatus": "Delivered",
            "strStatusTransOn": "15102024",
            "strStatusTransTime": "1306",
            "strStatusRelCode": "SEL",
            "strStatusRelName": "",
            "strRemarks": "PARVEZ KRISHAN",
            "strNoOfAttempts": "2",
            "strRtoNumber": "",
            "strComplaintNo": "",
            "strActualServiceType": null,
            "strExpectedAgent": null,
            "strActualAgent": null,
            "strConnectionDateTime": null,
            "strAltReferenceNumber": null,
            "strAgentConnectionLocation": null,
            "strBookingType": null,
            "strExpectedDeliveryDate": "15102024",
            "strRevExpectedDeliveryDate": "16102024"
        },
        "trackDetails": [
            {
                "strCode": "SPL",
                "strAction": "Softdata Upload",
                "strManifestNo": "",
                "strOrigin": "BHOPAL BRANCH",
                "strDestination": "",
                "strOriginCode": "I02",
                "strDestinationCode": "",
                "strActionDate": "09102024",
                "strActionTime": "1202",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "PCSC",
                "strAction": "Pickup Scheduled",
                "strManifestNo": "7284555177443",
                "strOrigin": "HUB OFFICE",
                "strDestination": "",
                "strOriginCode": "PF980",
                "strDestinationCode": "",
                "strActionDate": "09102024",
                "strActionTime": "1202",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "PCAW",
                "strAction": "Pickup Awaited",
                "strManifestNo": "",
                "strOrigin": "HUB OFFICE",
                "strDestination": "",
                "strOriginCode": "PF980",
                "strDestinationCode": "",
                "strActionDate": "09102024",
                "strActionTime": "1202",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "BKD",
                "strAction": "Booked",
                "strManifestNo": "",
                "strOrigin": "BHOPAL BRANCH",
                "strDestination": "",
                "strOriginCode": "I02",
                "strDestinationCode": "",
                "strActionDate": "09102024",
                "strActionTime": "2203",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "OBMN",
                "strAction": "In Transit",
                "strManifestNo": "I4407530",
                "strOrigin": "BHOPAL BRANCH",
                "strDestination": "NORTH T/S APEX",
                "strOriginCode": "I02",
                "strDestinationCode": "N04",
                "strActionDate": "09102024",
                "strActionTime": "2229",
                "sTrRemarks": "0.00",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "CDOUT",
                "strAction": "In Transit",
                "strManifestNo": "13810",
                "strOrigin": "BHOPAL BRANCH",
                "strDestination": "DELHI SAMALKHA APEX",
                "strOriginCode": "I02",
                "strDestinationCode": "N05",
                "strActionDate": "09102024",
                "strActionTime": "2251",
                "sTrRemarks": "Out Going Load Made To DELHI SAMALKHA APEX via  Master ConNo.I02N050910224429",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "CDIN",
                "strAction": "In Transit",
                "strManifestNo": "13810",
                "strOrigin": "BHOPAL BRANCH",
                "strDestination": "DELHI SAMALKHA APEX",
                "strOriginCode": "I02",
                "strDestinationCode": "N05",
                "strActionDate": "11102024",
                "strActionTime": "1556",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "IBMN",
                "strAction": "In Transit",
                "strManifestNo": "Y1632425117",
                "strOrigin": "BHOPAL BRANCH",
                "strDestination": "DELHI SAMALKHA APEX",
                "strOriginCode": "I02",
                "strDestinationCode": "N05",
                "strActionDate": "11102024",
                "strActionTime": "1632",
                "sTrRemarks": "12.30",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "OBMN",
                "strAction": "In Transit",
                "strManifestNo": "1004593499",
                "strOrigin": "DELHI SAMALKHA APEX",
                "strDestination": "PANCHKULA BRANCH",
                "strOriginCode": "N05",
                "strDestinationCode": "J13",
                "strActionDate": "11102024",
                "strActionTime": "1752",
                "sTrRemarks": "12.30",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "CDOUT",
                "strAction": "In Transit",
                "strManifestNo": "C19061577022338724943",
                "strOrigin": "DELHI SAMALKHA APEX",
                "strDestination": "PANCHKULA BRANCH",
                "strOriginCode": "N05",
                "strDestinationCode": "J13",
                "strActionDate": "11102024",
                "strActionTime": "2238",
                "sTrRemarks": "Out Going Load Made To PANCHKULA BRANCH via  Master ConNo.C19061577022338724943",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "CDIN",
                "strAction": "In Transit",
                "strManifestNo": "",
                "strOrigin": "DELHI SAMALKHA APEX",
                "strDestination": "PANCHKULA BRANCH",
                "strOriginCode": "N05",
                "strDestinationCode": "J13",
                "strActionDate": "12102024",
                "strActionTime": "0801",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "IBMN",
                "strAction": "In Transit",
                "strManifestNo": "1004593499",
                "strOrigin": "DELHI SAMALKHA APEX",
                "strDestination": "PANCHKULA BRANCH",
                "strOriginCode": "N05",
                "strDestinationCode": "J13",
                "strActionDate": "12102024",
                "strActionTime": "0848",
                "sTrRemarks": "0.00",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "INSCAN",
                "strAction": "Reached At Destination",
                "strManifestNo": "1004593499",
                "strOrigin": "DELHI SAMALKHA APEX",
                "strDestination": "PANCHKULA BRANCH",
                "strOriginCode": "N05",
                "strDestinationCode": "",
                "strActionDate": "12102024",
                "strActionTime": "0848",
                "sTrRemarks": "0.00",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "OUTDLV",
                "strAction": "Out For Delivery",
                "strManifestNo": "00273420849LI",
                "strOrigin": "PANCHKULA BRANCH",
                "strDestination": "",
                "strOriginCode": "J13",
                "strDestinationCode": "",
                "strActionDate": "14102024",
                "strActionTime": "1634",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "NONDLV",
                "strAction": "Not Delivered",
                "strManifestNo": "00273420849LI",
                "strOrigin": "PANCHKULA BRANCH",
                "strDestination": "",
                "strOriginCode": "J13",
                "strDestinationCode": "",
                "strActionDate": "14102024",
                "strActionTime": "1647",
                "sTrRemarks": "UAT|COULD NOT ATTEMPT",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "OUTDLV",
                "strAction": "Out For Delivery",
                "strManifestNo": "V520241015091917",
                "strOrigin": "PANCHKULA BRANCH",
                "strDestination": "",
                "strOriginCode": "J13",
                "strDestinationCode": "",
                "strActionDate": "15102024",
                "strActionTime": "0919",
                "sTrRemarks": "",
                "strLatitude": "",
                "strLongitude": ""
            },
            {
                "strCode": "DLV",
                "strAction": "Delivered",
                "strManifestNo": "5060378363",
                "strOrigin": "PANCHKULA BRANCH",
                "strDestination": "",
                "strOriginCode": "J13",
                "strDestinationCode": "",
                "strActionDate": "15102024",
                "strActionTime": "1306",
                "sTrRemarks": "PARVEZ KRISHAN",
                "strSCDOTP": "N",
                "strLatitude": "",
                "strLongitude": ""
            }
        ]
    };



    return (<>
        <section className="w-full h-auto mt-2">
            <div className="w-full h-auto flex justify-center items-center text-xl capitalize font-bold py-8">
                <h1>Track Your Orders here </h1>
            </div>
            <div className="w-full h-auto relative">
                {
                    data.trackDetails.map((track,id)=>{
                       return (<div id={id} className="item  w-full h-auto relative p-2 py-8 border-2 border-slate-200 flex gap-4 items-center">
                        <p className="text-md capitalize font-semibold">{`${track.strActionDate.slice(0,2) +"/"+ track.strActionDate.slice(2,4)+"/"+track.strActionDate.slice(6)}`}</p>
                        <span className="w-5 h-5 bg-[#FEBD69] flex justify-center items-center text-white rounded-sm">
                            <MdDone />
                        </span>
                         <span id={`l${id}`} className="w-1 h-[100px] left-24 top-16 bg-[#FEBD69] absolute z-10"></span>
                        <div>
                        <h2 className="text-md capitalize font-semibold">{track.strAction}</h2>
                        <p className="capitalize ">bhopal, {`${track.strActionTime.slice(0,2) +":" + track.strActionTime.slice(2)}`}</p>
                        </div>
                    </div>)
                    })
                }
            </div>
        </section>
    </>);
}


export default Orders;

