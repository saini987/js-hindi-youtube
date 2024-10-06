const coding = ["js","ruby","java","py"]

coding.forEach( function(val){
    // console.log(val);
})

function printMe(iitem){
    console.log(iitem);
}
// coding.forEach(printMe)

const myCoding = [
    {
        langugeName: "javascript",
        languageFileName: "js"
    },
    {
        langugeName: "java",
        languageFileName: "ja"
    },
    {
        langugeName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( function(item){
    console.log(item.langugeName)
})