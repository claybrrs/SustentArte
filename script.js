// // Seletores
// const cartModal = document.getElementById('cart-modal');
// const viewCartButton = document.getElementById('view-cart');
// const closeModalButton = document.querySelector('.close');
// const cartItemsContainer = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');
// const confirmOrderButton = document.getElementById('confirm-order');
// const resetOrderButton = document.getElementById('reset-order');

// let cart = [];

// // Função para abrir o carrinho
// viewCartButton.addEventListener('click', () => {
//     cartModal.style.display = 'block';
//     updateCartDisplay();
// });

// // Função para fechar o carrinho
// closeModalButton.addEventListener('click', () => {
//     cartModal.style.display = 'none';
// });

// // Função para adicionar produto ao carrinho
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', (event) => {
//         const productElement = event.target.closest('.produto');
//         const productName = productElement.querySelector('h3').innerText;
//         const productPriceText = productElement.querySelector('.preco').innerText;
//         const productPrice = parseFloat(productPriceText.replace('R$', '').replace(',', '.').trim());

//         // Adiciona o produto ao carrinho
//         cart.push({ name: productName, price: productPrice });
//         updateCartDisplay();

//         // Abre o modal após adicionar o produto
//         cartModal.style.display = 'block';
//     });
// });

// // Função para atualizar a exibição do carrinho
// function updateCartDisplay() {
//     cartItemsContainer.innerHTML = ''; // Limpa os itens existentes
//     let total = 0;

//     cart.forEach((item, index) => {
//         const itemElement = document.createElement('div');
//         itemElement.innerText = `${item.name} - R$${item.price.toFixed(2)}`;

//         // Botão de remover
//         const removeButton = document.createElement('button');
//         removeButton.innerText = 'Remover';
//         removeButton.addEventListener('click', () => {
//             removeFromCart(index);
//         });

//         itemElement.appendChild(removeButton);
//         cartItemsContainer.appendChild(itemElement);
//         total += item.price;
//     });

//     cartTotal.innerText = `Total: R$${total.toFixed(2)}`;
// }

// // Função para remover item do carrinho
// function removeFromCart(index) {
//     cart.splice(index, 1); // Remove o item do array
//     updateCartDisplay(); // Atualiza a exibição do carrinho
// }

// // Função para confirmar o pedido
// confirmOrderButton.addEventListener('click', () => {
//     alert('Pedido confirmado! Obrigado pela compra!');
//     cart = []; // Limpa o carrinho
//     updateCartDisplay();
//     cartModal.style.display = 'none';
// });

// // Função para reiniciar o pedido
// resetOrderButton.addEventListener('click', () => {
//     cart = []; // Limpa o carrinho
//     updateCartDisplay();
//     cartModal.style.display = 'none';
// });

// // Fechar o modal quando clicar fora dele
// window.onclick = function(event) {
//     if (event.target === cartModal) {
//         cartModal.style.display = 'none';
//     }
// };

// Seletores
const cartModal = document.getElementById('cart-modal');
const viewCartButton = document.getElementById('view-cart');
const closeModalButton = document.querySelector('.close');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const confirmOrderButton = document.getElementById('confirm-order');
const resetOrderButton = document.getElementById('reset-order');
const addAnotherProductButton = document.getElementById('add-another-product');

let cart = [];

// Função para abrir o carrinho
viewCartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
    updateCartDisplay();
});

// Função para fechar o carrinho
closeModalButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Função para adicionar produto ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.produto');
        const productName = productElement.querySelector('h3').innerText;
        const productPriceText = productElement.querySelector('.preco').innerText;
        const productPrice = parseFloat(productPriceText.replace('R$', '').replace(',', '.').trim());

        // Adiciona o produto ao carrinho
        cart.push({ name: productName, price: productPrice });
        updateCartDisplay();

        // Abre o modal após adicionar o produto
        cartModal.style.display = 'block';
    });
});

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    cartItemsContainer.innerHTML = ''; // Limpa os itens existentes
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item'); // Adiciona a classe

        itemElement.innerText = `${item.name} - R$${item.price.toFixed(2)}`;

        // Botão de remover
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.classList.add('remove'); // Adiciona a classe de estilo
        removeButton.addEventListener('click', () => {
            removeFromCart(index);
        });

        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.innerText = `Total: R$${total.toFixed(2)}`;
}


// Função para remover item do carrinho
function removeFromCart(index) {
    cart.splice(index, 1); // Remove o item do array
    updateCartDisplay(); // Atualiza a exibição do carrinho
}

// Função para confirmar o pedido
confirmOrderButton.addEventListener('click', () => {
    alert('Pedido confirmado! Obrigado pela compra!');
    cart = []; // Limpa o carrinho
    updateCartDisplay();
    cartModal.style.display = 'none';
});

// Função para reiniciar o pedido
resetOrderButton.addEventListener('click', () => {
    cart = []; // Limpa o carrinho
    updateCartDisplay();
    cartModal.style.display = 'none';
});

// Função para adicionar outro produto
addAnotherProductButton.addEventListener('click', () => {
    cartModal.style.display = 'none'; // Fecha o modal
});

// Fechar o modal quando clicar fora dele
window.onclick = function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
};

