$(document).ready(function(){
    $('#sizePicker').submit(function makeGrid(grid){
        var rows=$('input_height').val();
        var cols=$('input_width').va();
        for(var i=1;var<=rows;i++){
            $('table').append('<tr></tr>');
            for(var j=1;j<=cols;j++){
                $('tr:last').append('<td></td>');
                $('td').attr("class","cells");
            }
        }
        grid.preventDefault();

        $('.cells').click(function(event){
            var paint=$('#colorPicker').val();
            $(event.target).css('background-color',paint);
        });
    });
});