// function AllowDrop(event){
//     event.preventDefault();
// }
// function Drag(event){
//     event.dataTransfer.setData("text",event.currentTarget.id);
// }
// function Drop(event){
//     event.preventDefault();
//     var data=event.dataTransfer.getData("text");
//     event.currentTarget.appendChild(document.getElementById(data));
// }





var answer = ["Img11", "Img7", "Img16", "Img15", "Img2", "Img9", "Img3"]



function an(){
    var carray =[]
    var i1;
    var aaray=[]
     carray = document.getElementsByClassName('conclusion-container')[0].getElementsByTagName('img');
    

     if(carray.length==7){
        for(i=0;i<7;i++){
            i1 =  document.getElementsByClassName('conclusion-container')[0].getElementsByTagName('img')[i].id;
            aaray.push(i1);
        }
        console.log(answer);
        console.log(aaray);
        
     }

     if(JSON.stringify(answer)==JSON.stringify(aaray)){
        alert("Thats Right!!!")
    }
 
     
}