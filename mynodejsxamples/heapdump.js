const heapdump = require('heapdump');
const memwatch = require('memwatch-next');

// Create a heapdump on demand
const createHeapdump = () => {

  const filename = `heapdump-${Date.now()}.heapsnapshot`;

  heapdump.writeSnapshot(filename, (err, filename) => {

    if (err) {

      console.error('Error creating heapdump:', err);

    } else {

      console.log(`Heapdump written to ${filename}`);

    }
  });
};

// Start memory leak detection
memwatch.on('leak', (info) => {

  console.error('Memory leak detected:', info);

  createHeapdump(); // Create a heapdump on memory leak detection

});