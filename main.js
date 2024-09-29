window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 99.9;
  document.getElementById("myBar").style.width = scrolled + "%";

  ///Project section functionality

  const rightArrow = document.getElementById("rightArrow");
  const leftArrow = document.getElementById("leftArrow");
  const imageLink = document.getElementById("imageLink")

  let currentProjectNum = 1;

  rightArrow.addEventListener('click', () => {
    if (currentProjectNum < 5) {
      currentProjectNum++;
    }
    
    if (currentProjectNum == 2) {
      
      imageLink.href = "https://fraylin123.github.io/pocketGuard/";
      imageLink.target = "_blank";

      document.getElementById("projectText").innerHTML = " Pocketguard is a website that helps the user manage their debts and save money on their online service subscriptions. Created during the summer of my junior year as the culminating project of the All Star Code summer program.";
      document.getElementById("projectImage").src = "imgs/logo.png";
      document.getElementById("projectImage").style.width = "330px";


    }


    if (currentProjectNum == 3) {
      imageLink.href = "https://github.com/Fraylin123/Stocks-Web-Parser";
      imageLink.target = "_blank";

      document.getElementById("projectText").innerHTML = "A web parser that parses Yahoo's Finance Most Active Stocks page (https://finance.yahoo.com/markets/stocks/most-active/) to get the 25 most active stocks and displays them in a table on an Apache web server using PHP. The Python script uses get requests, BeautifulSoup for parsing, and pymongo to add the extracted data to a MongoDB database. The PHP script reads the data from the MongoDB database and displays the data in a table on an Apache web server."
      document.getElementById("projectImage").src = "imgs/webparser.png"
      document.getElementByID("projectImage").style.width = "330px"
    }
  }
  );

  leftArrow.addEventListener('click', () => {
    if (currentProjectNum > 1) {
      currentProjectNum--;
    }


    if (currentProjectNum == 1){
      document.getElementById("projectText").innerHTML = "I made this calculator app during an online advanced FDU Python Course using the Tkinter GUI Kit";
      document.getElementById("projectImage").src = "imgs/calculator.png"; 
      imageLink.href = "https://replit.com/@FraylinA/Calculator-App";
      imageLink.target = "_blank";
      document.getElementById("projectImage").style.width = "220px";
     
    }
    if (currentProjectNum == 2) {
      
      imageLink.href = "https://fraylin123.github.io/pocketGuard/";
      imageLink.target = "_blank";

      document.getElementById("projectText").innerHTML = " Pocketguard is a website that helps the user manage their debts and save money on their online service subscriptions. Created during the summer of my junior year as the culminating project of the All Star Code summer program.";
      document.getElementById("projectImage").src = "imgs/logo.png";
      document.getElementById("projectImage").style.width = "330px";


    }

  });

}
