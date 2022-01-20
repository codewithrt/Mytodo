console.log("This is rahul");

async function getData(){
    url = "https://api.github.com/users"
    const papu = await fetch(url)
    const lalu = await papu.json()
    return lalu
}

let s = getData();
s.then((data)=>{
     console.log(data);
})