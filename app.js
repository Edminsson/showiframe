window.addEventListener("load", () => {
    const skapaIframe = document.getElementById('create-iframe');
    const raderaIframe = document.getElementById('remove-iframe');
    const openWindow = document.getElementById('open-window');
    const closeWindow = document.getElementById('close-window');
    const sendMessage = document.getElementById('send-message');
    let embeddedWindow;
    
    skapaIframe.addEventListener('click', () => {
      console.log('create iframe');
      const iframe = document.createElement('iframe');
      iframe.id = 'iframe'
      iframe.src = 'https://rad-choux-97d2d8.netlify.app/';
      iframe.style.width = '500px';
      iframe.style.height = '500px';
      document.body.appendChild(iframe);
    });

    raderaIframe.addEventListener('click', () => {
      console.log('remove iframe');
      const iFrameEl = document.getElementById('iframe');
      document.body.removeChild(iFrameEl);
    });    

    openWindow.addEventListener('click', () => {
      console.log('window.open');
      embeddedWindow = window.open(
        "https://rad-choux-97d2d8.netlify.app/",
        "_blank",
        "width=400,height=500,resizable=no,scrollbars=no,left=300,top=150"
      );  
    });

    closeWindow.addEventListener('click', () => {
      embeddedWindow.close();
    });

    sendMessage.addEventListener('click', () => {
      console.log('sendMessage');
      embeddedWindow.postMessage('HELLO: Message from showIframe')
    });

    window.addEventListener('message', event => {
      // Försöker filtrera bort en massa meddelande
      //event.data.startsWith('HELLO')
      if (event.data.startsWith('HELLO')) {
        console.log('MESSAGE:', event)
      }
    });
});
