 /* 
   Create an array to store all task
*/
 let taskAr = [];
 let ULlist = document.getElementById("taskList");
 let strikeLine = document.getElementsByClassName("line").value;


/* 
   THIS FUNCTION CALLED EVERY TIME WHEN USER CLICKS ADD TASK BUTTON
*/
function createDiv(){
    let  task = document.getElementById("txt").value;
    let warn = document.getElementById("warn");
    if(task==""){
        
        warn.innerHTML=`  <p> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" class="svg-inline--fa fa-circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"></path></svg>
                         Please enter a task</p>`
        console.log("warned ")


    }
    else{
        warn.innerHTML="";
        arrayFun(task);
        console.log("created")
        
        showli();
    }
     
  
}


function arrayFun(x){
   
    /* 
   Here we Adding every task to an array named arrayFun
    */
    taskAr.push(x);
     
}


/* 
   ShowList (showli Function)is important ,
   because we every time call this function whenever user deletes are add a task to the array
*/
function showli(){
    htmlLi= ""
    taskAr.forEach(function(element,index){
        htmlLi += ` <li id="add-div">
                     <input type="checkbox" class="line" >${element} 
                       <span id="close-btn"   style="color: black;" onclick="deleteLi(${index})" >
                         <i class="fas fa-trash">
                         </i>
                        </span>
                    </li>`
        

     })
     /* 
     appending the whole html code to the ul tag in html
    */
     ULlist.innerHTML=htmlLi;
     document.getElementById("txt").value="";
     
}
 /* 
   Here we are Deleting user's clicked task from array by the help of index
*/
function deleteLi(index){
    taskAr.splice(index, 1); 
    console.log(taskAr)
    /* 
     calling showli function  to render new html list after deleting an task list
    */
    showli()
        }
    



