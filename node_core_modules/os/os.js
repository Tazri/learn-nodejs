const os = require('os');

// console.log('os = ',os); // return os object where contain about this os

// os.arch()
console.log('os.arch() = ',os.arch()); // return architecture about this os

// os.constants
// console.log('os.constants = ',os.constants); // return object where containing operating system constants for prossing signals, error cotes etc.

// os.cpus()
// console.log('os.cpus() = ',os.cpus()); // return a array where containing information about cpu

// os.endianness()
console.log('os.endianness() = ',os.endianness()); // return a endianness of cpu;

// os.EOL
console.log('os.EOL = ',os.EOL); // return a end of line cpu;
// console.log(os.EOL);

// os.freemem()
console.log('os.freemem() = ',os.freemem()); // return a freemem to string

// os.hostname()
console.log('os.hostname() = ',os.hostname());

// os.loadavg()
console.log('os.loadavg() = ',os.loadavg()); // reaturn a array where cpu load average. one,five and 15 minute

// // os.networkInterfaces()
// console.log('os.networkInterfaces() = ',os.networkInterfaces()); // return a object where contain data about compute network interface

// os.platform()
console.log('os.platform() = ',os.platform()); // return os name or platform name

// os.release()
console.log('os.release() = ',os.release()); // return the information about the operating system as string

// os.tmpdir()
console.log('os.tmpdir() = ',os.tmpdir()); // return os default tmporary directory

// os.totalmem()
console.log('os.totalmem() = ',os.totalmem()); // return number of total memory of the system

// os.type()
console.log('os.type() = ',os.type()); // return operating system type

// os.uptime()
console.log('os.uptime() = ',os.uptime()); // return operating system uptime's in secound

// os.userInfo()
console.log('os.userInfo() = ',os.userInfo()); // return user Information in this operating system.
