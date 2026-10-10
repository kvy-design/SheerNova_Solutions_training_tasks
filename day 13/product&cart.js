let total = 0
let ruppe = []
class Product{
    constructor(pro , ruppies){
        this.pro = pro
        this.ruppies = ruppies
        ruppe.push(ruppies)    
        total = ruppe.reduce((acc,cur)=>{
            acc += cur
            return acc
        },0)
    }

    static showCart(){
        console.log(total)
    }
    removeProduct(){
        let index = ruppe.indexOf(this.ruppies)
            if(total){
                ruppe.splice(1)
                total -= this.ruppies
                return total
            }
            else{
                return 0
            }
        }
    }


let pro1 = new Product("laptop" , 2000)
let pro2 = new Product("Bottle", 400)
pro1.removeProduct()

Product.showCart()