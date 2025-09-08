import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const wishList = [];

console.log("Bem-Vindo ao seu carrinho da shopee \n");

// criando dois itens
const item1 = await createItem("Lego Ferrari", 249.9, 3);
const item2 = await createItem("Lego Nissan", 300, 3);

// adicionei dois itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Remove um item
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// deleta um item
await cartService.deleteItem(myCart, 1);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
