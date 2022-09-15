const altura = (prompt('Digite sua altura (em metros): '));
const peso =  (prompt('Digite seu peso (em kg):'));



    

const calulo = () => {

    if (altura / '' && peso / ''){

        const imc = (peso / (altura * altura));

    if (imc < 15.5) {
        
        } else if ( imc < 25) {
            document.write (`Peso normal ${imc}`);
        } else if (imc < 30 ){
            document.write  (`Acima do peso ${imc}`);
        } else if (imc < 35 ) {
            document.write (`Obesisdade grau II ${imc}`);
        } else {
            document.write (`Obesidade`);
        }

        
    }


}
