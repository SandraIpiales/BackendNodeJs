const IP="192.168.100.172";
const PORT=3001;
const URL="http://"+IP+":"+PORT+"/";

export const getAllContacts=(fnRefreshList)=>{
    console.log("getAllContacts ..");
    fetch(
        URL+"contactos"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            
            fnRefreshList(body);
        }
    );
}

export const saveContactRest=(contact, fnshowMessage )=>{
    const config={
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            nombre: contact.name,
            apellido: contact.surname,
            celular: contact.phoneNumber
        })
    }
    fetch(
        URL + "contactos",config
    ).then(response=>response.json())
    .then((body)=>{
        fnshowMessage();
        console.log(body);
    });
}