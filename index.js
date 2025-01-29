// let inp=document.querySelector("input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");


// btn.addEventListener("click",async()=>{
//     ul.innerText="";
//     let country=inp.value;
//     let res=await getcollege(country);
//     let clgarr=res.data;
//     showclg(clgarr);
// })

// function showclg(clgarr){
//     for(lists of clgarr){
//         let li=document.createElement("li");
//         li.innerText=lists.name;
//         ul.appendChild(li);
//     }
// }

// async function getcollege(country){
//     let link="http://universities.hipolabs.com/search?name="
//     try{
//         let url=await axios.get(link+country)
//         return url;
        
//     }catch(e){
//         console.log("error");
//     }
// }

let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");


btn.addEventListener("click",async()=>{
    ul.innerText="";
    let state=inp.value;
    inp.value="";
    let res=await getcollege(state);
    let clgarr=res.data;
    showclg(clgarr);
})

function showclg(clgarr){
    for(lists of clgarr){
        let li=document.createElement("li");
        li.innerText=lists.name;
        ul.appendChild(li);
    }
}

async function getcollege(state){
    let link="http://universities.hipolabs.com/search?name="
    if(state == ""){
        console.log("Please enter the state name");
    }else{
        try{
            let url=await axios.get(link+state)
            return url;
            
        }catch(e){
            console.log("error");
        }
    }
    
}