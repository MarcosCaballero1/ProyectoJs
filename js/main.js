
credito();

function credito() {
    let nombre = validarNumOString(prompt('nombre'));
    let edad = validarNumOString(prompt('edad'), 'num');
    let ciudadania = validarNumOString(prompt('ciudadania'));
    let montoSolicitado = validarNumOString(prompt('Ingresa monto a solicitar'), 'num');
    let ingresosMensuales = validarNumOString(prompt('Ingresos mensuales'), 'num');
    
    let empleado = yesOrNo(prompt('Ha estado empleado en los ultimos 6 meses? Si/No'));
    if (empleado.toLowerCase() == 'no') {
        return alert('Lo siento, para poder solicitar un crédito en nuestro banco se necesita un historial laboral de minimo 6 meses anteriores a hoy');
    }
    
    let bienes = yesOrNo(prompt('bienes a su nombre - Si/No'))
    if (bienes.toLowerCase() == 'si') {
        let cantBienes = validarNumOString(prompt('Cuantos bienes tiene a su nombre?'), 'num')
    }

    let deudasExistentes = yesOrNo(prompt('Cuenta con una deuda existente? Si/No'))
    if  (deudasExistentes.toLowerCase() == 'si'){
        let deudaTotal = validarNumOString(prompt('De cuanto es su deuda actual?'), 'num')
        if (deudaTotal > ingresosMensuales) {
            return alert('Lo siento, dado a que su deuda es mayor a su salario no puede ser un candidato para obtener un crédito')
        }
    }    
        alert('Aguarde un momento, los funcionarios están corroborando su información para poder aprobar/desaprobar su crédito')
        sleep(5000).then(() => { 
            alert('Felicidades, su crédito ha sido aprobado! Solo necesitamos unos datos más y ya estará listo!')
            let cuotas = validarNumOString(prompt('En cuantas cuotas desea realizar el préstamo?'), 'num')
            let cantPorMes = montoSolicitado / parseFloat(cuotas);
            resume(cantPorMes, nombre, montoSolicitado, cuotas, edad)
        });
        
}
        //Array
    // let tipoPago = ['efectivo', 'transferencia', 'cheque'];
    // let tipoPagoRespuesta = prompt ('Cómo desea recibir su crédito? (Efectivo, Transferencia, Cheque)')
    // for (let i = 0; i < tipoPago.length; i++) {
    //     if(tipoPagoRespuesta.toLocaleLowerCase() == tipoPago[i]){
            
    //     }
    // }        
    // }
        //Objeto
    // let usuario = {
    //     nombre = validarNumOString(prompt('nombre')),
    //     edad = validarNumOString(prompt('edad'), 'num'),
    //     ciudadania = validarNumOString(prompt('ciudadania')),
    //     montoSolicitado = validarNumOString(prompt('Ingresa monto a solicitar'), 'num'),
    //     ingresosMensuales = validarNumOString(prompt('Ingresos mensuales'), 'num'),
    // }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function resume(cantPorMes, nombre, montoSolicitado, cuotas){
        alert('Felicidades ' + nombre + ' su crédito de ' + montoSolicitado + ' en ' + tipoPagoRespuesta + ' ha sido aprobado con éxito. \n Se deberá abonar ' + cantPorMes + ' por ' + cuotas + ' meses');
    }
    function validarNumOString(value, numOrNot){
        if(numOrNot == 'num'){
            while (isNaN(value)) {
                value = prompt(value + ' no es numero, por favor, vuelve a intentarlo')
            }
        }else{
            while (!isNaN(value)) {
                value = prompt('No se permiten números, por favor, vuelve a intentarlo')
            }
        }
        return value;
    }

    function yesOrNo(siONo) {
        while(siONo.toLowerCase() != 'no' && siONo.toLowerCase() != 'si') {
            siONo = prompt('Debe ingresar únicamente Si/No')
        }
        return siONo;
    }
    //Buenas noches Coder! sepan disculpar esta entrega, pienso cambiar y empezar de 0 mi proyecto con una idea mejor.