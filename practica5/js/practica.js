$( document ).ready(function() {
    console.log( "ready!" );

    $('#enviar').click(function(){
     $.get("https://wizard-world-api.herokuapp.com/Spells")
        .done(function(data){
            let Charm=data.filter(Spells => Spells.type== "Charm");
            let Conjuration=data.filter(Spells => Spells.type== "Conjuration");
            let Transfiguration=data.filter(Spells => Spells.type== "Transfiguration");
            let DarkCharm=data.filter(Spells => Spells.type== "DarkCharm");
            let Jinx=data.filter(Spells => Spells.type== "Jinx");
            console.log(Charm,Conjuration, Transfiguration, DarkCharm, Jinx);
        });
    let Name=$('#name').val();
    $.get("https://wizard-world-api.herokuapp.com/Spells", {name:Name})
        .done(function(data){
            console.log(data);
           $('.resultado').html(data[0].effect);
        });    
        
    });
});