<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Examen</title>
    <style>
        body{
            text-align:center;
        }
    </style>
</head>
<body>
        <div class="mt-3">
                <div class="col-12">Lugar:
                    <input type="text" name="text" id="lugar">                  
                </div>
                <div class="col-12">Persona:
                    <input type="text" name="text2" id="persona">                  
                </div>
                <div class="col-12">Peso:
                    <input type="text" name="text3" id="peso">                  
                </div>
                <div class="col-12">Costo:
                    <input type="text" name="text4" id="costo">                  
                </div>
                    <div><input id="enviar" type="button" value="Enviar"></div>
                <div class="resultado"></div>
        </div>
        <div class="col-12">Ingrese Persona:
                <input type="text" name="text4" id="filtro">                  
        </div>
                <div><input id="filtrar" type="button" value="Filtrar"></div>
</body>
<script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>
<script src="js/examen.js"></script>
</html>