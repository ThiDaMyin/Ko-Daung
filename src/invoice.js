import { Drawer } from "flowbite";
import { productRender } from "./app/product.js";
import { manageProductBtnHandler, newProductFormHandler, printBtnHandler, recordFormHandler, recordGroupHandler } from "./core/handlers.js";
import { closeDrawer, manageProductBtn, newProductForm, printBtn, recordForm, recordGroup } from "./core/selectors.js";
import { products } from "./core/variables.js";
import { recordObserver } from "./core/records.js";

class Invoice {

observer(){
recordObserver()
}


    initialRender() {
        productRender(products)

    }


    listener() {
        manageProductBtn.addEventListener("click", manageProductBtnHandler)
        closeDrawer.addEventListener("click",manageProductBtnHandler)
        newProductForm.addEventListener("submit",newProductFormHandler)
        recordForm.addEventListener("submit",recordFormHandler)
        recordGroup.addEventListener("click",recordGroupHandler)
        printBtn.addEventListener("click",printBtnHandler)
    }

    init() {
        console.log("Invoice App Start");
        this.observer()
        this.initialRender()
        this.listener()
    }

}


export default Invoice;

