const KEY = "yum-tBCC15CdlDcqTJ4b";
const url = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";
const ID = "vjcb";

//hämtar menyn som lista
export async function getMenu() {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-zocom": KEY,
        },
    };
    try {
        const response = await fetch(url + "menu", options);
        const data = await response.json();
        //returnerar menyn dirr till .items
        return data.items;
        //vet inte hur error funkar, LÄS PÅ OM DET
    } catch (error) {
        console.log("Fel:", response.status, error);
    }
}

// async function tenantGet() {
//     const bodyToSend = {
//         name: "Felix Skorvald",
//     };

//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "x-zocom": KEY,
//         },
//         body: JSON.stringify(bodyToSend),
//     };
//     try {
//         const response = await fetch(url + "tenants", options);

//         if (!response.ok) {
//             console.error(
//                 `Fel vid API-anrop: ${response.status} ${response.statusText}`
//             );
//             return;
//         }

//         const data = await response.json();
//         console.log(data);
//         console.log(response);
//         console.log(response.status);

//         //vet inte hur error funkar, LÄS PÅ OM DET
//     } catch (error) {
//         console.log("Fel:", error.message);
//     }
// }
