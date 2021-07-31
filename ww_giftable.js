/*      STYLING GIFTABLE PLUGIN - CART      */

const relo = () => {
    ww_cart_gift();
    ww_cart_gift_style();

    remZ();
}

const ww_cart_gift = () => {
    const title = document.querySelector('.dgfw-available-gifts-title');
    if (title != null) {
        title.innerHTML = "Bransoletka gratis!";
    }
    title.style.marginTop = "16px";
    const carousel = document.querySelector('.dgfw-gifts-carousel');
    if (carousel != null) {
        carousel.style.display = "flex";
        carousel.style.justifyContent = "space-evenly";
        carousel.style.alignItems = "stretch";
        carousel.style.marginBottom = "16px";
        if(window.innerWidth < 582) {
            carousel.style.flexDirection = "column";
        }
    }
    const giftItem = document.querySelectorAll('.dgfw-gift');
    if (giftItem != null) {
        for(let i = 0; giftItem.length > i; i++) {
            giftItem[i].style.display = "flex";
            giftItem[i].style.flexDirection = "column";
            giftItem[i].style.justifyContent = "space-between";
        }
    }
    const giftButton = document.querySelectorAll('.dgfw-select-gift-button');
    if (giftButton != null) {
        for(let i = 0; giftButton.length >i; i++) {
            giftButton[i].style.alignSelf = "center";
        }
    }
}
const ww_cart_gift_style = () => {
    const select = document.querySelectorAll('.dgfw-select-gift-button');
    // console.log(select);
    if (select != null) {    
        for(let i = 0; select.length > i; i++) {
            select[i].addEventListener('click', () => {
                const catchx = () => {
                    document.querySelector('.dgfw-available-gifts .product .onsale').remove();
                    document.querySelector('.dgfw-available-gifts .product .woocommerce-product-details__short-description').remove();
                    document.querySelector('.dgfw-available-gifts .product .woo_discount_rules_variant_table').remove();
                    document.querySelector('.dgfw-available-gifts .product .configbtn').remove();
                    document.querySelector('.dgfw-available-gifts .product #additional_options').remove();

                    const remX = document.querySelector('.single_add_to_cart_button');
                    remX.addEventListener('click', () => {
                        const catchy = () => {
                            // const remY = document.querySelectorAll('.remove');
                            // if (remY != null) {
                            //     for(let i = 0; remY.length > i; i++) {
                            //         remY[i].addEventListener('click', () => {
                            //             setTimeout(remZ, 3000);
                            //         });
                            //     }
                            // }
                            remZ();
                        }
                        setTimeout(catchy, 2000);
                    });

                    document.querySelector('#dgfw-gifts-carousel').remove();

                    // remZ();
                    // console.log('ready again');
                }
                setTimeout(catchx, 3000);
                document.querySelector('#dgfw-gifts-carousel').classList.add('hiddenx');
            });        
        }
    }
}
const remZ = () => {
    const remZZ = () => {        
        const remY = document.querySelectorAll('.remove');
        // console.log(remY);
        for(let i = 0; remY.length > i; i++) {
            remY[i].addEventListener('click', () => {
                setTimeout(relo, 3000);
                console.log('rem ready');
            });
        }
    }
    // setTimeout(remZZ, 3000);
    remZZ();
}
if(document.URL.includes('koszyk')) {
    document.addEventListener('DOMContentLoaded', ww_cart_gift);     //      SCRIPT LAUNCHER
    document.addEventListener('DOMContentLoaded', ww_cart_gift_style);     //      SCRIPT LAUNCHER
    document.addEventListener('DOMContentLoaded', remZ);     //      SCRIPT LAUNCHER
}

/*      STYLING GIFTABLE PLUGIN - POPUP      */
const ww_popup_gift = () => {
    const pageFrame = document.querySelector('#page');
    pageFrame.style.position = "relative";
    if(localStorage.getItem("popup") == "visited") {} else {

        const frame = document.createElement('div');
        frame.classList.add('popup2020');
        frame.style.position = "fixed";
        frame.style.zIndex = "10000000";
        frame.style.maxWidth = "740px";
        frame.style.display = "flex"
        frame.style.flexDirection = "column";
        frame.style.justifyContent = "space-around";
        frame.style.textAlign = "center";
        // frame.style.padding = "32px 20px 40px 20px";
        frame.style.backgroundColor = "white";
        frame.style.fontSize = "14px";
        frame.style.lineHeight = "18px";
        frame.style.letterSpacing = ".3px";
        frame.style.boxSizing = "border-box";

        frame.style.width = "100%";

        let img;
        if(window.innerWidth > 740) {
            frame.style.top = "calc((100vh - 720px) / 2)";
            frame.style.left = "calc(50% - 360px)";
            img = "<img style='border: 1px solid white;' src='https://www.karobijouline.pl/wp-content/uploads/2021/05/dzien_matki_2021_prezent_v3_720.png'></img>";
        } else if(window.innerWidth <= 740 && window.innerWidth > 400) {
            frame.style.top = "20%";
            frame.style.left = "0";
            frame.style.left = "0";
            img = "<img style='border: 1px solid white;' src='https://www.karobijouline.pl/wp-content/uploads/2021/05/dzien_matki_2021_prezent_v3_720.png'></img>";
        } else {
            // frame.style.top = "0";
            frame.style.top = "108px";
            frame.style.left = "0";
            img = "<img style='border: 1px solid white;' src='https://www.karobijouline.pl/wp-content/uploads/2021/05/dzien_matki_2021_prezent_v3_720.png'></img>";
        }
        frame.innerHTML = `${img}`;

        const cancel = document.createElement('div');
        cancel.style.position = "absolute";
        cancel.style.top = "20px";
        cancel.style.right = "20px";
        cancel.style.width = "31px";
        cancel.style.height = "31px";
        cancel.style.backgroundColor = "black";
        const cross1 = document.createElement('div');
        cross1.style.width = "2px";
        cross1.style.height = "24px";
        cross1.style.backgroundColor = "white";
        cross1.style.position = "absolute";
        cross1.style.borderRadius = "3px";
        cross1.style.top = "4px";
        cross1.style.left = "15px";
        const cross2 = document.createElement('div');
        cross2.style.width = "24px";
        cross2.style.height = "2px";
        cross2.style.backgroundColor = "white";
        cross2.style.position = "absolute";
        cross2.style.borderRadius = "5px";
        cross2.style.top = "15px";
        cross2.style.left = "4px";
        const crossx = document.createElement('div');
        crossx.style.position = "absolute";
        crossx.style.transform = "rotate(135deg) translate(-8px, -30px)";
        crossx.style.left = "11px";
        crossx.style.top = "1px";
        crossx.appendChild(cross1);
        crossx.appendChild(cross2);
        cancel.addEventListener('click', () => {
            frame.remove();
            window.localStorage.setItem("popup", "visited");
        });
        cancel.appendChild(crossx);
        frame.appendChild(cancel);
        pageFrame.appendChild(frame);    
    }
}
//document.addEventListener('DOMContentLoaded', ww_popup_gift);     //      SCRIPT LAUNCHER



///// SKRYPT NAPRAWIAJĄCY BŁĄD W KOSZYKU - GIFTABLE - TYLKO 1 GRATIS MOŻLIWY W CHECKOUCIE!!!/////
const checkoutHacker = () => {

    const blockButton = () => {
        const placeOrder = document.getElementById("place_order");
        console.log(placeOrder);
        placeOrder.remove();
        alert("Masz za dużo gratisów w koszyku!!!");
    }
    // setTimeout(
    //     blockButton, 3000
    // );

    const item = document.querySelectorAll('.cart_item');
    console.log(item);

    // let j =0;
    for(let i=0; item.length>i; i++){
        if(item[i].innerHTML.includes("GRATIS")){
            // if(j > 0) {}
            // j ++;
            
            if(item[i].querySelector(".product-quantity").innerHTML !== "× 1"){
                setTimeout(
                    blockButton, 3000
                );
            }
            
        }
    }

} 

if(document.URL.includes("zamowienie")){
    document.addEventListener('DOMContentLoaded', checkoutHacker);
}