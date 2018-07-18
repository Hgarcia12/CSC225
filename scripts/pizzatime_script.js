alert("PIZZA TIME!");
function topping_check(){
               
                if(toppings == "peps")
                    document.getElementById("img").src = "./images/Pepperoni.png";
                if(toppings == "g_pep")
                    document.getElementById("img").src = "./images/green-peppers.png";
                if(toppings == "jalapeno")
                    document.getElementById("img").src= "./images/jalapenos.png"
                if(toppings == "sausage")
                    document.getElementById("img").src= "./images/McIntosh_Apple.png"
            }
function calculate(){
                var taxRate = 0.088;
                var total;
                var cheese_price;
                var sauce_price;
                var tops;
                
                if(base=="small")
                    total = 10;
                if(base=="medium")
                    total = 12;
                if(base=="large")
                    total = 14;
                
                if(cheese=="american")
                    cheese_price = 0.50;
                if(cheese=="white")
                    cheese_price = 0.50;
                if(cheese=="mozzarella")
                    cheese_price = 0;
                
                if(sauce=="tomato")
                    sauce_price = 0;
                if(sauce=="ranch")
                    sauce_price = 0.25;
                if(sauce=="bbq")
                    sauce_price = 0.25;
                
                
                if(toppings=="peps")
                    tops = .50;
                if(toppings=="g_pep")
                    tops = 0.25;
                if(toppings=="jalapeno")
                    tops = 0.25;
                if(toppings=="sausage")
                    tops = 0.50;
                
                
                total = total + cheese_price + sauce_price + tops;
                total = total + total * taxRate;
                document.forms[0].price.value = total;
                }
function clear(){
                base="none";cheese="none";toppings="none";sauce="none";total=0;
                document.forms[0].price.value = "0.00";
            }
function loadParam(){
            var base = "none";
            var cheese = "none";
            var sauce = "none";
            var toppings = "none";
            
}