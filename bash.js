//Output Prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === "pwd") {
        returnPwd();
    }  
    process.stdout.write('You typed: ' + cmd);
     
    
    
});

const returnPwd = require('./pwd');