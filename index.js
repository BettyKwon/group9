$(document).ready(function(){
        var url = "http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=inventory_get";
        $("#getJSON").on("click", function () {
            $(".result_body").empty();
            $.getJSON(url, function(data){
                $.each( data.payload, function( key, value ) {
                    var myString = "";
                    myString += '<tr><td>' + value.namn;
                    myString += '</td><td>' + value.namn2;
                    myString += '</td><td>' + value.sbl_price;
                    myString += '</td><td>' + value.pub_price;
                    myString += '</td><td>' + value.beer_id;
                    myString += '</td><td>' + value.count;
                    myString += '</td><td>' + value.price;
                    myString += '</td></tr>';
                    $(".result_body").append(myString);
                });
            });
        });


        $('li a').on("click", function () {
            var v = $(this).attr('name');
            $(".result_body").empty();
            $.getJSON(url, function(data){
                $.each( data.payload, function( key, value ) {
                    // here we want to do getJSON call
                    var url = "http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=beer_data_get&beer_id="+value.beer_id;
                    $.getJSON(url, function(data){
                       $.each( data.payload, function( key, value ) {
                        var beer_type = value.varugrupp;
                        
                        if(beer_type.indexOf(v) != -1) {
                        var myString = ""; 
                        myString += '<tr id='+value.beer_id +'><td><a href="#" >' + value.namn;
                        myString += '</a></td><td>' + value.namn2;
                        myString += '</td><td>' + value.varnummer;
                        myString += '</td><td>' + value.alkoholhalt;
                        myString += '</td><td>' + value.prisinklmoms;

                        $(".result_body").append(myString);
                        }
                    });
                });
            });
        });
    });

    $()

});


