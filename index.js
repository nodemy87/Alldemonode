const auth = require('./auth');
const path = require('path');
const fs = require('fs');
const os = require('os');
const emitter = require('events');
const http = require('http');
///////////Invoked function working to background of nodemodule//////////////

/*(function(exports, module, require, __dirname, __filename) {
    console.log('hello ')
})('manoj shimpi')*/

/* Example Cli color */
//const color = require('cli-color');
//console.log(color.red('manoj shimpi'))

/* Example local module */
/*auth.registers('manoj');
auth.login('manoj');*/

/* Example Path */
//dirname
//console.log('Folder name ' + path.dirname(__filename))

//filename

//console.log('filename name ' + path.basename(__filename))

//Exname
//console.log('Exname name ' + path.extname(__filename))

// Parse

//console.log('Exname name ' + path.parse(__filename))

//join

//console.log('Exname name ' + path.join(__dirname, 'order', 'app.js'))

//Filesystem

//make dir

/*fs.mkdir(path.join(__dirname, '/test', 'a.js'), (err) => {
    if (err) {
        //console.log('something wron' + err)
        return
    }
    //console.log("Folder created");
})*/

/*fs.writeFile(path.join(__dirname, 'test', 'app.txt'), 'manoj shimpi\n', (err) => {
    if (err) {
        throw err
    }
    fs.appendFile(path.join(__dirname, 'test', 'app.txt'), 'manoj dsd\n', (err) => {
        if (err) {
            throw err
        }
        console.log("New text addedd")
    })
    console.log('File created')
})*/

//read file

/*fs.readFile(path.join(__dirname, 'test', 'app.txt'), 'utf-8', (err, data) => {
    if (err) {
        throw err
    }

    const cont = Buffer.from(data);
    console.log(data);
})*/

//OS

//console.log("OS Type " + os.type())
//console.log("Platform " + os.platform())
//console.log("cpu " + os.arch())

//console.log("cpu details" + os.cpus())

//console.log("Free Memory " + os.freemem())

//console.log("Total Memory " + os.totalmem())

//console.log("uptime " + os.uptime())

//Events

/*const myemitter = new emitter();

myemitter.on('somthing', (data) => {
    console.log(data)
})

myemitter.emit('somthing', {
    name: 'manoj shimpi'
})*/

/*class auths extends emitter {
    register(username) {
        console.log('Registerd Successfully ')
        this.emit('registerd', username);
    }
}

const obj = new auths();

obj.on("registerd", (data) => {
    console.log(`Mail Has Been Send ${data}`)
})

obj.register('Welcome');*/


const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    if (req.url == '/') {
        fs.readFile(path.join('public', 'index.html'), (err, content) => {
            if (err) {
                throw err
            }
            res.end(content)
        })
    } else if (req.url === '/about') {
        res.end("About page")
    }

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})