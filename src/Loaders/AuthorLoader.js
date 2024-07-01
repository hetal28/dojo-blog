export const authorLoader = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if(res.status === 404){
        throw Error("Cound not fetch the careers");
    }
    return res.json();

}