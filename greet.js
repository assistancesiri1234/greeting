


function greetgenerator(){
    const array=[
        "hii",
        "hello",
        "holla",
        "cian"

    ]
    for (let index = 0; index < array.length; index++) {
        const randomIndex=Math.floor(Math.random()*array.length);
        console.log(array[randomIndex])
 }
}
greetgenerator()
