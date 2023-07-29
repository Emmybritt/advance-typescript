/**
 * @author Emmy britt
 * @param status the status is a string that accepts
 * either "pending" | "accepted" | "rejected"
 */
function doSomething(status) {
    console.log(status);
}
doSomething("pending");
var newStatus = "jsj";
var val = "accepted";
var obj = {
    accepted: "yes",
    pending: "no",
    rejected: "yes",
};
console.log(Object.values(obj));
console.log(Object.keys(obj));
