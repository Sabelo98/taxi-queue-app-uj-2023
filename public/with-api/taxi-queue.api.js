document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
            version: 'api-1.0',
            queueLength: 0,
            paasenger: 0,
            taxi: 0,
            taxiDepart: 0,
            taxiQueueLength: 0,
            joinTaxiQueue: 0,


            init() {
                axios
                    .get('/api/passenger/queue')
                    .then(result => {
                        // an example API call
                        this.queueLength = result.data.queueCount
                    });
            },

            joinQueue() {
                axios
                    .post('/api/passenger/join')
                    .then(result => {
                        // 
                        this.passenger = result.data.message
                    });
                    axios
                    .post('/api/taxi/join')
                    .then(result => {
                        // 
                        this.taxi = result.data.message
                    });

            },

            leaveQueue() {
                axios
                    .post('/api/passenger/leave')
                    .then(result => {
                        // 
                        this.passenger = result.data.message
                    });
                axios
                    .post('/api/taxi/leave')
                    .then(result => {
                        // 
                        this.taxi = result.data.message
                    });
            },

            queueLength() {
                axios
                    .get('/api/passenger/queue')
                    .then(result => {
                        // an example API call
                        this.queueLength = result.data.queueCount
                    });

            },

            taxiQueueLength() {
                axios
                .get('/api/taxi/queue')
                .then(result => {
                    // an example API call
                    this.queueLength = result.data.queueCount
                });

            },

            taxiDepart() {
                axios
                .post('/api/taxi/depart')
                .then(result => {
                    //taxi departs the queue
                    this.taxiDepart = result.data.message
                });
            }
        }
    });

});