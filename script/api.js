const KEY = "yum-tBCC15CdlDcqTJ4b";
const url = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";

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
        const response = await fetch(url + "/menu", options);
        const data = await response.json();
        //returnerar menyn dirr till .items
        return data.items;
        //vet inte hur error funkar, LÄS PÅ OM DET
    } catch (error) {
        console.log("Fel:", response.status, error);
    }
}
