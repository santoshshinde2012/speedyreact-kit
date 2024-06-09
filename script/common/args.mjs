const args = process.argv.slice(2);

let analyze = false;

async function parseArguments() {
    for (const arg of args) {
        if (arg.startsWith('--analyze=')) {
            const value = arg.substring('--analyze='.length);
            analyze = value == "true"
        }
    }
}

parseArguments();

export {
    analyze
}