function reject (message: string): never {
    throw new Error(message);
}

function processEvents (): never {
    while (true) {
        // Process events
    }
}

// reject('...');
processEvents();
console.log('Hello World!');
