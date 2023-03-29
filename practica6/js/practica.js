$( document ).ready(function() {
    console.log( "ready!" );

    const idGriffindor="0367baf3-1cb6-4baf-bede-48e17e1cd005";
    
    $('#Gryffindor').click(function(){
        setInformacion(idGriffindor);
    });
    function setInformacion(id){
    $.get("https://wizard-world-api.herokuapp.com/Houses/" + id)
    .done(function(info){
        console.log(info);
        $('.nombre').html(info.name);
        $('.colores').html(info.houseColours);
        $('.fundador').html(info.founder);
        $('.animal').html(info.animal);
        
        let cabezas=info.heads;
let nombres = " ";
        cabezas.forEach(elemento => {
            nombres += elemento.firstName + " ";
        });
        $('.cabezas').html(nombres );
    })};

    const idRavenclaw="805fd37a-65ae-4fe5-b336-d767b8b7c73a";
    
    $('#Ravenclaw').click(function(){
        setInformacion(idRavenclaw);
    });
    function setInformacion(id){
    $.get("https://wizard-world-api.herokuapp.com/Houses/" + id)
    .done(function(info){
        console.log(info);
        $('.nombre').html(info.name);
        $('.colores').html(info.houseColours);
        $('.fundador').html(info.founder);
        $('.animal').html(info.animal);
        
        let cabezas=info.heads;
let nombres = " ";
        cabezas.forEach(elemento => {
            nombres += elemento.firstName + " ";
        });
        $('.cabezas').html(nombres );
    })};


    const idHufflepuff="85af6295-fd01-4170-a10b-963dd51dce14";
    
    $('#Hufflepuff').click(function(){
        setInformacion(idHufflepuff);
    });
    function setInformacion(id){
    $.get("https://wizard-world-api.herokuapp.com/Houses/" + id)
    .done(function(info){
        console.log(info);
        $('.nombre').html(info.name);
        $('.colores').html(info.houseColours);
        $('.fundador').html(info.founder);
        $('.animal').html(info.animal);
        
        let cabezas=info.heads;
let nombres = " ";
        cabezas.forEach(elemento => {
            nombres += elemento.firstName + " ";
        });
        $('.cabezas').html(nombres );
    })};

    const idSlytherin="a9704c47-f92e-40a4-8771-ed1899c9b9c1";
    
    $('#Slytherin').click(function(){
        setInformacion(idSlytherin);
    });
    function setInformacion(id){
    $.get("https://wizard-world-api.herokuapp.com/Houses/" + id)
    .done(function(info){
        console.log(info);
        $('.nombre').html(info.name);
        $('.colores').html(info.houseColours);
        $('.fundador').html(info.founder);
        $('.animal').html(info.animal);
        
        let cabezas=info.heads;
let nombres = " ";
        cabezas.forEach(elemento => {
            nombres += elemento.firstName + " ";
        });
        $('.cabezas').html( nombres );
    })};
});