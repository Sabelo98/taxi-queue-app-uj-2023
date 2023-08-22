document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			TaxiCount: 0,
			PassengerCount: 0,


			joinQueue() {
				let count = 1;
				 this.PassengerCount = this.PassengerCount + count;
			},

			leaveQueue() {
				if (this.PassengerCount > 0) {
					let count = 1;
					 this.PassengerCount = this.PassengeCount - count;
				}
				else {
					alert(
						"no passengers"
					);
				}

			},

			joinTaxiQueue() {
				let count = 1;
				 this.TaxiCount = this.TaxiCount + count;
			},

			queueLength() {
				 this.PassengerCount.length
			},

			taxiQueueLength() {
				 this.TaxiCount.length
			},

			taxiDepart() {
				if (this.PasengerCount >= 12 && this.TaxiCount >= 1) {
					let count = 1
					this.PassengerCount = this.PassengerCount - 12;
					this.TaxiCount = this.TaxiCount - count

				}
			}
		}

	});

});


