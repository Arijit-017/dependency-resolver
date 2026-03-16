const { execSync } = require("child_process")
const path = require("path")

exports.resolve = function(tasks,dependencies){

    const V = tasks.length
    const E = dependencies.length

    let input = V + " " + E + "\n"

    dependencies.forEach(dep=>{
        const u = tasks.indexOf(dep[0])
        const v = tasks.indexOf(dep[1])
        input += u + " " + v + "\n"
    })

    const exePath = path.join(__dirname,"..","cpp-engine","resolver.exe")

    const output = execSync(exePath,{input})

    const result = output.toString().trim().split(" ")
    
    if(result[0] === "Cycle"){
        return "Cycle detected in dependencies"
    }
    
    return result.map(i=>tasks[i])
}