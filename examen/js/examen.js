$( document ).ready(function() {
    console.log( "ready!" );

    var paquetes = [
        {lugar:'casa', persona: 'A', peso:10, costo:30},
        {lugar:'edificio', persona: 'C', peso:5, costo:15},
        {lugar:'departamento', persona: 'A', peso:7, costo:21},
        {lugar:'casa', persona: 'D', peso:8, costo:24},
        {lugar:'casa', persona: 'B', peso:4, costo:12},
        {lugar:'edificio', persona: 'B', peso:20, costo:60},
        {lugar:'departamento', persona: 'A', peso:30, costo:90}
    ]

    $('#enviar').click(function(){

    const objPaquete={};
    objPaquete['lugar']= $('#lugar').val();
    objPaquete['persona']=$('#persona').val();
    objPaquete['peso']=parseInt($('#peso').val());
    objPaquete['costo']=parseInt($('#costo').val());
    //suma
let suma=paquetes.reduce(function(num,paquete){
    return num + paquete.costo;
},0);
        console.log(suma);
    //
    paquetes.push(objPaquete);
    console.log(paquetes);
        
    });
    
    $('#filtrar').click(function(){
        let fil=$('#filtro').val();
        const filtro = paquetes.filter(paquetes =>paquetes.persona === fil);
        console.log(filtro);
       let suma=filtro.reduce(function(num,paquete){
            return num + paquete.costo;
        },0);
                console.log(suma);
    });
});