let menu=[
    "paneer tikka",
    "chilli potato",
    "kabab",
    "onion wings",
    "garlic naan",
    "chicken lolipop",
    "egg curry"
]

function isveg(food){
    if  (food.toLowerCase().indexOf("chicken") !== -1)return false
    if  (food.toLowerCase().indexOf("egg") !== -1) return false
    else return true
}

function oniongarlicfree(food)
{
    if   (food.toLowerCase().indexOf("onion")!== -1)return false
    if   (food.toLowerCase().indexOf("garlic")!== -1)return false
    else return true
}

let vegmenu= menu.filter(isveg)
let jainmenu=menu.filter(oniongarlicfree)


console.log("MENU:" + menu)
console.log("VEG MENU:" + vegmenu)
console.log("JAIN MENU:"+ jainmenu)

