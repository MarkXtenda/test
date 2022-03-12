/* const mark = {
    age: 23,
    accesories: ["phone", "computer"],
    status: "broke",
    mentalState: "bad"
    }

//console.log(Object.keys(mark)) 
// Show keys of an object

//console.log(Object.values(mark))
//show values of an object

console.log(Object.assign(mark, gender, "male", skills, "coding")) */

/*
const result = true

const newPromise = new Promise((success, reject)=> {
    if (result) {
        success("promise hasa been made")
    } else {
        reject("promise hasa been rejected")
    }
})

const onfulfilled = (result)=> console.log(result)
const onReject = (result)=> console.log(result)

newPromise.then(onfulfilled, onReject) // handle fulfilment (and rejection)
newPromise.catch(onReject)  //handle the rejection
*/

const newPromise = new Promise((success, reject)=> {
    for (let i = 0; i < 10000000; i++) {
        success("Loop finished")
        
    }
})

const onfulfilled = (data)=> console.log("Promise fulfilled: ", data)
const onReject = (error)=> console.log("Promise rejected: ", error)

newPromise.then(onfulfilled) // handle fulfilment (and rejection)
newPromise.catch(onReject)  //handle the rejection
