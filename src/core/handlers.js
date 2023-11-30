import Swal from "sweetalert2";
import { productUi } from "../app/product.js";
import { calculateRecordTotal, recordUi, recordUpdate } from "./records.js";
import { newProductForm, productDrawer, quantityInput, recordForm, recordGroup } from "./selectors.js";
import { products } from "./variables.js";
import { ConfirmBox, toast } from "./functions.js";

export const manageProductBtnHandler = () => {
  productDrawer.classList.toggle("translate-x-full");
  productDrawer.classList.add("duration-200");
};


export const newProductFormHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(newProductForm);

  // console.log(formData.get("new_product_name"));
  // console.log(formData.get("new_product_price"));

  const newProduct = {
    id: Date.now(),
    name: formData.get("new_product_name"),
    price: formData.get("new_product_price"),
  };

  productGroup.append(productUi(newProduct));
  productSelect.append(new Option(newProduct.name, newProduct.id));
  products.push(newProduct);

  newProductForm.reset();
};


// handler
export const recordFormHandler = (event) => {
  event.preventDefault();
  const currentProduct = products.find(
    (product) => product.id == productSelect.value
  );


  const isExist = app.querySelector(`[product-id='${currentProduct.id}']`);

  if (isExist) {
    recordUpdate(currentProduct.id,quantityInput.valueAsNumber)

  
  } else {
    recordGroup.append(
      recordUi(
        currentProduct.id,
        currentProduct.name,
        currentProduct.price,
        quantityInput.valueAsNumber
      )
    );

  }

  recordForm.reset();
};


export const recordGroupHandler = (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("record-del")) {
    ConfirmBox(() => {
      event.target.closest("tr").remove();
      toast("Delete Successful")

  
    },"Do you want to delete ?")
   
  } else if (event.target.classList.contains("q-add")) {
    recordUpdate(event.target.closest("tr").getAttribute("product-id"),1)


  } else if (event.target.classList.contains("q-sub")) {
    recordUpdate(event.target.closest("tr").getAttribute("product-id"),-1)
    
  }
};

export const printBtnHandler = () => {
  print();
};