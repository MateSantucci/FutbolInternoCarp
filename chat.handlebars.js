<h1>Chat</h1>

<div id="messages">
  {{#each messages}}
    <p><strong>{{user}}:</strong> {{message}}</p>
  {{/each}}
</div>

<form action="/messages" method="post">
  <input type="text" name="user" placeholder="Correo electrónico">
  <input type="text" name="message" placeholder="Mensaje">
  <button type="submit">Enviar</button>
</form>

<script>
  const socket = io();
  const messages = document.getElementById('messages');

  socket.on('message', (data) => {
    const message = document.createElement('p');
    const strong = document.createElement('strong');
    const text = document.createTextNode(data.user + ': ');
    strong.appendChild(text);
    message.appendChild(strong);
    message.appendChild(document.createTextNode(data.message));
    messages.appendChild(message);
  });
</script>
