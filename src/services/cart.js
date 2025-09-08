//quais ações meu carrinho pode fazer

// adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// Calcular o total do carrinho
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0); //Permite pegar os itens e realizar uma ação com eles
  console.log(`\n🎁Total: ${result}`);
}

// Deletar item do carrinho
async function deleteItem(userCart, index) {
  // tranfoma o indice visual do usuario, para o indice do backend
  const deleteIndex = index - 1;

  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

// Remover um item
async function removeItem(userCart, item) {
  //encontrando um item
  const indexFound = userCart.findIndex((p) => {
    return p.name === item.name;
  });

  // item > 1 subtrair um item,
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  // item = 1 dimunir o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
