document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        var name = document.getElementById('name').value.trim();
        var message = document.getElementById('message').value.trim();

        var nameError = document.getElementById('name-error');
        var messageError = document.getElementById('message-error');

        
        
        nameError.textContent = '';
        messageError.textContent = '';

        // Verifica se os campos estão preenchidos
        if (!name) {
            nameError.textContent = 'Por favor, digite o seu nome.';
            nameError.style.display = 'block'; 

            return;
        }
        if (!message) {
            messageError.textContent = 'Por favor, escreva uma mensagem.';
            messageError.style.display = 'block'; 

            return;
        }

        // Enconde url 
        var encodedName = encodeURIComponent(name);
        var encodedMessage = encodeURIComponent(message);

        // Link
        var whatsappLink = `https://wa.me/5567998780937?text=Olá, me chamo ${encodedName}! ${encodedMessage}`;

        window.open(whatsappLink, '_blank');
    });
});