$(document).ready(function(){

    console.log('hello from client');
    
    var input1 = 0;
    var input2 = 0;
    var operation = "";
    var jsonTX ="";

$('#inputForm').submit(function(event){
    event.preventDefault();
    console.log('saw submit button');
    var $input1 = $('#fInput1');
    var $input2 = $('#fInput2');

    jsonTX ="[";
    jsonTX+="'input1':'"+$input1.val()+"',";
    jsonTX+="'input2':'"+$input2.val()+"',";
    jsonTX+=operation;
    jsonTX+="]";

    console.log('json string:', jsonTX);
});

    $('#addButton').on('click',function(){
        console.log('saw addButton');
        operation="'operation':'add'";
    });

    $('#subButton').on('click',function(){
        console.log('saw subtractButton');
        operation="'operation':'sub'";
    });

    $('#multButton').on('click',function(){
        console.log('saw MultiplydButton');
        operation="'operation':'mult'";
    });

    $('#divButton').on('click',function(){
        console.log('saw divideButton');
        operation="'operation':'div'";
    });









    $('.appendMe').append("the answer");


});

