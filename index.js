$(document).ready(function(){
        var url = "http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=inventory_get";

        $("#getJSON").on("click", function () {
            $(".result_body").empty();
            $.getJSON(url, function(data){
                $.each( data.payload, function( key, value ) {
                    var myString = "";
                    myString += '<tr class="add"><td>' + value.namn;
                    myString += '</td><td>' + value.namn2;
                    myString += '</td><td>' + value.sbl_price;
                    myString += '</td><td>' + value.pub_price;
                    myString += '</td><td>' + value.beer_id;
                    myString += '</td><td>' + value.count;
                    myString += '</td><td>' + value.price;
                    myString += '</td><td class="add"><a href="javascript:void(0)" class="add" name='+value.beer_id+'> ADD </a></td></tr>';
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

                    if(v==='Other') {
                        var arr = ['Aperitif', 'Must', 'Övrigt'];
                        var str = ""; 

                        for(i=0; i<arr.length; i++) {
                            $.each( data.payload, function( key, value ) {
                                var type = value.varugrupp;

                                if(type.indexOf(arr[i]) != -1) {
                                    str += '<tr id='+value.beer_id +'><td><a href="#" >' + value.namn;
                                    str += '</a></td><td>' + value.namn2;
                                    str += '</td><td>' + value.varnummer;
                                    str += '</td><td>' + value.alkoholhalt;
                                    str += '</td><td>' + value.prisinklmoms;
                                    str += '</td></tr>';

                                    $(".result_body").append(str);
                                }

                            })


                        }
                    } else {

                       $.each( data.payload, function( key, value ) {
                        var beer_type = value.varugrupp;
                        var x = "abcd";

                        if(beer_type == 'Cider')
                        {
                            x = "Alkoholfritt";
                        }

                        if(beer_type.indexOf(v) != -1 ) {
                            //////
                            if(beer_type.indexOf(x) === -1) {
                        var myString = ""; 
                        myString += '<tr id='+value.beer_id +'><td><a href="#" >' + value.namn;
                        myString += '</a></td><td>' + value.namn2;
                        myString += '</td><td>' + value.varnummer;
                        myString += '</td><td>' + value.alkoholhalt;
                        myString += '</td><td>' + value.prisinklmoms;
                        myString += '</td></tr>';

                        $(".result_body").append(myString);
                            }
                        }
                    });
                   } //end of if-else statement
                });
            });
        });
    });

    // part for cart
            $('.add').on("click", function () {
                alert("asdf");
                /*
                var v = $(this).attr('name');
                var url = "http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=beer_data_get&beer_id="+v;
                $.getJSON(url, function(data){
                $.each( data.payload, function( key, value ) {
                    $(".list").append(value.namn);

                });
            });
            */         
        });

        $('.checkout').on("click", function () {
            alert("check out");
        });


});


