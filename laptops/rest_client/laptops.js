const IP="192.168.0.105";
const PORT=3005;
const URL="http://"+IP+":"+PORT+"/";


export const getAllLaptops=(fnRefreshList)=>{
    fetch(
        URL+"laptops"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{

            fnRefreshList(body);
        }
    );
}