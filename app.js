let url="http://universities.hipolabs.com/search?name=india";
let btn=document.querySelector("button");
ul=document.querySelector("ul");
let state;

// btn.addEventListener("click",async ()=>{
//     state=document.querySelector("input").value;
//     let list=await collegeDetails(state);
//     printList(list);
// })


// function printList(list){
//     ul.innerText=" ";
//     for(li of list){
//         let element=document.createElement("li")
//         element.innerText=li.name;
//         ul.append(element)
//     }
// }

// async function collegeDetails(country){
//     try{
//         let clgName=await axios.get(url+country);
//         return clgName.data;
//     }
//     catch(e){
//         console.log("error-",e)
//     }
// }


async function collegeDetails(){
    try{
        let clgName=await axios.get(url)
        console.log(clgName.data[0].state-province);
    }
    catch(e){
        console.log("error-",e);
    }
}

collegeDetails()