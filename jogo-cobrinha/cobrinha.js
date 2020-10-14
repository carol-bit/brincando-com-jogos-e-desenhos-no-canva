
        var tela = document.querySelector('canvas');    
        var pincel = tela.getContext("2d"); 
        pincel.fillStyle = 'white';    
        pincel.fillRect(0, 0, 600, 400);
    
        var x = 20;    sentido = 1;    raio = 10;    aux = 1;
        // códigos do teclado
        var esquerda = 37;  
        var cima = 38;    
        var direita = 39;    
        var baixo = 40;    
        var taxa = 10;    
        var y = 20;

        function desenhaTexto(x , y, texto) {
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

        pincel.font='15px Courier New';
        pincel.fillStyle='purple';
        pincel.fillText(texto, x, y);    
        }
        
        function desenhaCirculo(cor, x, y, raio) {
        
         pincel.fillStyle = cor;       
         pincel.beginPath();        
        pincel.arc(x, y, raio, 0, 2 * Math.PI);       
         pincel.fill();    
        }

        function limpaTela() {  
               
            pincel.clearRect(0, 0, 600, 400);  
        }
    
        function pulsar() {
            if (raio <= 10) {            
        
                aux = aux + 1;       
            }

            else if(raio > 12) {           
                 aux = aux -1;       
            }
            raio = raio + aux;   
        }

        function morrer() {                  
            
            if(x >= 600 ) {
                       
            x = 1; 
            y = 20;       
            alert('Você Morreu! Deseja Continuar? ');      
            } // inserir aqui voltar pro jogo 

            if(x <= 0) {           
                x = 1; 
                y = 20;            
                alert('Você Morreu! Deseja Continuar? ');      
            }

            if(y == 400) {            
                x = 1; y = 20;            
                alert('Você Morreu! Deseja Continuar? ');     
            }

            if(y <= 0) {           
                x = 1; y = 20;            
                alert('Você Morreu! Deseja Continuar? ');       
            }   
        }     
         
        function leDoTeclado(evento) {
            
            if(evento.keyCode == esquerda) {                
                x = x - taxa;                   
            }  

            if(evento.keyCode == direita) {                
                x = x + taxa;            
            }

            if(evento.keyCode == cima) {               
                
                y = y - taxa;            
            }
            
            if (evento.keyCode == baixo) {                
                y = y + taxa;            
            }    
        }

        function sorteiaPosicao(maximo) {

            return Math.floor(Math.random() * maximo);  
        }   
          
        function atualizaTela() {    
            
            limpaTela();    
            desenhaCirculo('purple',x, y, raio);   
            desenhaCirculo('purple',(x-20), y, raio);    
            desenhaCirculo('purple',(x-40), y, raio);    
            pulsar()        
            x++;    
            morrer();
            var posicaoX = 300;
            var posicaoY = 200;
            desenhaCirculo('purple', posicaoX, posicaoY, raio);      
            document.onkeydown = leDoTeclado;
            desenhaTexto(0,400,'Boa Sorte!');
        
        console.log(atualizaTela);
        }   
        
        
        setInterval(atualizaTela, 30);    
          
