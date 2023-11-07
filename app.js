window.addEventListener("load", () => {
    const skapaIframe = document.getElementById('create-iframe');
    const raderaIframe = document.getElementById('remove-iframe');
    const openWindow = document.getElementById('open-window');
    const closeWindow = document.getElementById('close-window');
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

    skapaIframe.addEventListener('click', () => {
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
    
});
