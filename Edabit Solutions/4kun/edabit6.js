function assignPersonToJob(names, jobs) {
    const result = {};
    
    for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const job = jobs[i];
    result[name] = job;
    }
    
    return result;
}
    
const names = ["Annie", "Steven", "Lisa", "Osman"];
const jobs = ["Teacher", "Engineer", "Doctor", "Cashier"];
    
console.log(assignPersonToJob(names, jobs));