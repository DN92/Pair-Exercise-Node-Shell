const returnPwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')

// Output Prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data,) => {
    const str = data.toString().trim().split(' ');
    const cmd = str[0];
    const arg = str[1];
    // process.stdout.write("THIS IS STR cmd");

    switch(cmd) {
        case "pwd" :
            returnPwd();
            break;

        case "ls" :
            ls();
            break;

        case "cat" :
            cat(arg);
            break;
    }
    setTimeout(() => {process.stdout.write('\nprompt > ')}
    , 1000) ;
    // process.stdout.write('\nprompt > ')
});



