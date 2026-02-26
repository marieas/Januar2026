
        updateView();
        function updateView(){
        document.getElementById('app').innerHTML = /*HTML*/ `
        <div>Wallet: ${wallet}</div>
        <img onclick="addToCart('bread',breadPrice)" src="images/bread.jpg">
        <img onclick="addToCart('butter',buttaPrice)" src="images/butter.jpg">
        <img onclick="addToCart('milk',milkPrice)" src="images/milk.jpg">
        <img onclick="addToCart('salami',salamiPrice)" src="images/salami.jpg">
        <div>Total price: ${totalPrice}</div>
        <div>${getShoppingCartView()}</div>
        <button onclick="buyItems()">Buy items</button>
        <div>${checkOutMsg}</div>
        `
        }

        function getShoppingCartView(){
            let html ='';
            for(let i = 0; i < cart.length; i++){
                html += `<li onclick="removeItem(${i})"> ${cart[i]}</li>`;
            }
            return html;
        }