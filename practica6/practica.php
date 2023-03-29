<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Practica 06</title>
    <style>

    </style>
</head>
<body>
        <div class="container">
            <div class="row mt-5">
                
            <div class="col-3"><input type="button" value="Ravenclaw" id="Ravenclaw">
                </div>
            <div class="col-3"><input type="button" value="Gryffindor" id="Gryffindor">
                </div>
            <div class="col-3"><input type="button" value="Hufflepuff" id="Hufflepuff">
                </div>
            <div class="col-3"><input type="button" value="Slytherin" id="Slytherin">
                </div>
                <div class="resultado"></div>
                </div>
            
        

        <div class="row">
            <div class="col-3">
                <table class="table">
                    <thead>
                        <th scope="col" colspan="2" class="nombre"></th>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Colores</th>
                            <td class="colores"></td>
                        </tr>
                        <tr>
                            <th scope="row">Fundador</th>
                            <td class="fundador"></td>
                        </tr>
                        <tr>
                            <th scope="row">Animal</th>
                            <td class="animal"></td>
                        </tr>
                    </tbody>
                </table>

                <table class="table mt-3">
                    <thead>
                        <th scope="col"> HEADS</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="cabezas"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>
<script src="js/practica.js"></script>
</html>