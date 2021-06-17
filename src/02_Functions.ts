function showDetails(id: number, userName: string, mail_id?: string) {
    console.log("ID:", id);
    console.log("Name", userName);

    if (mail_id != undefined)
        console.log("Email: ", mail_id);
}

showDetails(123, "John"); // This is ok we said it can be undefined
showDetails(111, "mary", "mary@xyz.com");
// showDetails(111); // An argument for 'userName' was not provided.


// Rest Parameters
function addNumbers(...nums:number[]) {
    let i;
    let sum:number = 0;

    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers",sum)
}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)

