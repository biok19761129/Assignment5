// STEP 1. 
    function writeMessage() { alert("I have been clicked");}

// STEP 2. 
        var myButton = document.getElementById("buttonTwo");
            myButton.onclick = function() {
            window.alert("I have been clicked");
        };
    
// STEP 3. 
        var myButton = document.getElementById("buttonThree");
        myButton.addEventListener("click", writeMessage, false);

        function writeMessage() {
            alert("I have been clicked");
        }

// STEP 4. On index.html

// STEP 5. On index.html

// STEP 6. 
        var googleClick = document.getElementById("redirect");
            googleClick.addEventListener("click", urlClick, false);
                                         
            function urlClick(event){
                    event.preventDefault();
                    alert("You clicked a link.");
                };  

// STEP 7. 
        
            var myButton7 = document.getElementById("buttonSeven");
            var myTextArea = document.getElementById("textArea");
            myButton7.addEventListener("click", textAreaClick, false);

                function textAreaClick(){
                    alert(myTextArea.value);
                    myButton7.disabled = true;
                }

// STEP 8. 

        var myButton8 = document.getElementById("buttonEight");
        myButton8.addEventListener("click", popUp, false);
        
        function popUp() {
            window.open("newpage.html",'newpage', 'width=300, height=300, resizable=yes');
        }


// STEP 9. 
        var myButtonStart = document.getElementById("buttonStart");
        var myButtonStop = document.getElementById("buttonStop");
            
        myButtonStart.addEventListener("click", startlog, false);
        myButtonStop.addEventListener("click", endlog, false);
            
        var interval;

        function startlog(){
            interval = setInterval(function(){console.log("Learning JavaScript is fun!")}, 2000);
        };

        function endlog(){
            clearInterval(interval)
        };

// STEP 10. 

        var dropDown = document.getElementById("selectTag");
        var myButtonSelects = document.getElementById("buttonList");
            
        myButtonSelects.addEventListener("click", selectedOption, false);
    
        function selectedOption() {
            alert(dropDown.value);
        }
