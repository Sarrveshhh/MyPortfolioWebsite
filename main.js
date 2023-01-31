const app = document.getElementById("app");
function showBanner(){
    const p = document.createElement('p');
    p.innerText = "Welcome to My Terminal! Hello!";
    p.classList.add('terminal-text');
    app.appendChild(p); 
    
    const pre = document.createElement('pre');
    pre.innerText = `
                                _                _ _   _               
    ___ ___ ___ ___ _ _ ___ ___| |_    _____ ___| | |_| |_ ___ ___ ___ 
   |_ -| .'|  _|  _| | | -_|_ -|   |  |     | .'| |  _|   | .'|   | -_|
   |___|__,|_| |_|  \_/|___|___|_|_|  |_|_|_|__,|_|_| |_|_|__,|_|_|___|
                                                                       
    `;
    pre.classList.add('terminal-text');
    app.appendChild(pre);

}

function createInput(){
    const visitor = document.createElement('p');
    visitor.classList.add('terminal-text');
    visitor.innerText = 'visitor@terminal.sarrvesh.dev:~$';
    app.appendChild(visitor);
    var input = document.createElement('input');
    input.type = "text";
    input.classList.add('terminal-text', 'main-terminal');
    app.appendChild(input);
}

function initialTerminal(){
    showBanner();
    createInput();   

}

initialTerminal();  