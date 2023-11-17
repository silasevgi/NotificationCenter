


showNotificationCenter();
function showNotificationCenter() {
    var Last_Products = [];

    var productCount = JSON.parse(localStorage.getItem("ins-last-visited-products-49218"));
    var loopIterations = Math.min(3, productCount.data.length);

    for (let i = 0; i < loopIterations; i++) {
        let j = productCount.data.length - i - 1;

        // Create a new product object with information from localStorage
        let product = {
            "name": productCount.data[j].name,
            "desc": productCount.data[j].unit_sale_price,
            "img":  productCount.data[j].product_image_url,
            "link": productCount.data[j].url
        };

        // Add the product object to the Last_Products array
        Last_Products.push(product);
    }

    // Create the notification container
    const notificationCenter = document.createElement('div');
    notificationCenter.id = 'notification-center';
    notificationCenter.innerHTML = `
     <i class="fa fa-times-circle close-icon"> </i>
     <div class="container" >
       
  
   <h1 class="title">DISCOVER OUR DEALS</h1>
    <div class="main">
   <div class="notification">
     <div class="notification-image">
       <img src="${Last_Products[0].img}" />
     </div>
     <div class="notification-info">
       <h2 class="notification-title">${Last_Products[0].name}</h2>
       <p class="notification-body">${Last_Products[0].desc}</p>
       <a class="notification-detail" href="${Last_Products[0].link}">Ürünü görmek için tıklayınız</a>
     </div>
   </div>
   
   <div class="notification">
     <div class="notification-image">
       <img src="${Last_Products[1].img}" />
     </div>
     <div class="notification-info">
       <h2 class="notification-title">${Last_Products[1].name}</h2>
       <p class="notification-body">${Last_Products[1].desc}</p>
       <a class="notification-detail" href="${Last_Products[1].link}">Ürünü görmek için tıklayınız</a>
     </div>
   </div>
   
   <div class="notification">
     <div class="notification-image">
       <img src="${Last_Products[2].img}" />
     </div>
     <div class="notification-info">
       <h2 class="notification-title">${Last_Products[2].name}</h2>
       <p class="notification-body">${Last_Products[2].desc}</p>
       <a class="notification-detail" href="${Last_Products[2].link}">Ürünü görmek için tıklayınız</a>
     </div>
   </div>
   
  </div>
  
  </div>
  
   `;

    // CSS styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
  .main {
  margin: 30px 10px;
  width: 400px;
  
  
  } 
  #notification-center{ 
  position: fixed;
  right: 30px;
  top: 150px; 
  background:#193DB0;
  border-radius:30px;
  width:400px;
  margin:10px;
  }
  .notification {
  backgroud-color:#193DB0;
  align-items: center;
  border: 1px solid white;
  display: flex;
  margin: 2px;
  margin-right:50px;
  padding: 10px; width:300;
  
  }
  .notification-image {
  align-items: center;
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  width:320px;
  }
  .notification-image img {
  width: 50px;
  }
  .notification-info {
  display: flex;
  flex: 7 0 0;
  flex-direction: column;
  padding: 0 0 0 20px;
  }
  .notification-title {
  color:white;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
  }
  .notification-body {
  margin: 0;
  padding: 5px 0 0 0; color:#988A7D;
  }
  .notification-detail {
  align-self: flex-end;
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
  }
  .notification-detail:hover {
  color:#988A7D;
  }
  .notification-hidden {
  display: none;
  }  
  .fa{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content:flex-start; 
  color:white;
  justify-self:flex-start;
  overflow:hidden;
  font-size:50px; 
  position:fixed; 
  right:60px;
  }
  .title{
  font-size:1.4em; 
  color:white; 
  margin-left:75px; 
  animation-name: example;
  animation-duration:5s;
  animation-iteration-count: infinite
  }

  .fa-bell{
    color:#193DB0;
} 
  
  @keyframes example {
    from {color: white;}
    to {color:red;}
  };
  
  
@media screen and (min-width:900px) {

#notification-center{width:400px;}

}
@media (min-width:768px) and (max-width:900px) {

    #notification-center{width:300px;}
    .main {width: 300px;}
    .notification{width:200}
    .title{font-size:1.2em;margin-left:40px}
    .fa {font-size:40px;margin-top:20px;}
    }

@media (max-width:768px) {

    #notification-center{width:auto;}
    .main {width: auto;}
    .notification{width:auto}
    .title{font-size:1.2em;margin-left:40px}
    .fa {font-size:40px;margin-top:20px;}
    }

}
  `

    // Add click event listener to each close icon
    const icons = notificationCenter.getElementsByClassName("close-icon");
    const cont = notificationCenter.querySelector(".container");

    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", (e) => {
            if (e.target.classList.contains("fa-bell")) {
                // If the clicked icon has the "fa-bell" class, remove both "notification-hidden" and "fa-bell" classes
                cont.classList.remove("notification-hidden");
                e.target.classList.remove("fa-bell");
            } else {
                // If the clicked icon does not have the "fa-bell" class, add the "notification-hidden" class
                cont.classList.add("notification-hidden");
                e.target.classList.add("fa-bell");
            }
        });
    }
    
    
    const icon = notificationCenter.querySelector(".fa-times-circle");
    window.onresize = () => {
        

        if (screen.width <= 768) {
            cont.classList.add('notification-hidden');
            icon.classList.add('fa-bell');
        }
    };


    // Append the <style> element to the <head> of the document
    document.head.appendChild(styleElement);
    document.body.appendChild(notificationCenter);

   


}


function isProductPage(url) {
    return url.contains("urun");
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if the current page is not a product page and there are at least 3 products
    const pageData = JSON.parse(localStorage.getItem("ins-pageview-counter-opt-76604")).data;
    const productData = JSON.parse(localStorage.getItem("ins-last-visited-products-49218")).data;

    if (!isProductPage(pageData.url) && productData.length >= 3) {
        console.log("Hi");
        showNotificationCenter();
    }

});
  // Function to check if the current page is a product page
