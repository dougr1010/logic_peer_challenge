$(document).ready(function(){

    console.log('client:hello');
    
    var input1 = 0;
    var input2 = 0;
    var operation = "";

    //grab data from the form
    $('#inputForm').submit(function(event){
        event.preventDefault();
        console.log('saw submit button');
        var input1 = $('#fInput1').val();
        var input2 = $('#fInput2').val();

        console.log('data to send: ', input1,input2,operation);


        //send to server and receive the result back
        $.ajax({
            type: 'POST',
            url: '/calc/data_in',
            //data: jsonTX,
            data: {input1:input1,input2:input2,operation:operation},
            beforeSend: function(stuff) {
                //console.log(stuff);
            },
            success: function(response){  //response is the calc result
                console.log(response);

                //append the result to the DOM
                $('.appendMe').append(response);
                $('.appendMe').append("<div></div>");

                //clear the data entry boxes
                $('#fInput1').val('');
                $('#fInput2').val('');
            }
        });

    });

    //buttons provide the operator

    $('#addButton').on('click',function(){
        console.log('saw addButton');
        operation="add";
    });

    $('#subButton').on('click',function(){
        console.log('saw subtractButton');
        operation="sub";
    });

    $('#multButton').on('click',function(){
        console.log('saw MultiplydButton');
        operation="mult";
    });

    $('#divButton').on('click',function(){
        console.log('saw divideButton');
        operation="div";
    });

});

