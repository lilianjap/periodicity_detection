inlets = 2;
outlets = 4;

var bpm = 0;

function bang(bpm) {
outlet(0, bpm )
outlet(1, 'bang')
post(bpm)
}

function msg_float (x) {
	if (inlet == 0) {
		changeBPM(x);
		outlet(2, x);
	}
	else if (inlet == 1) {
		getBPM(x);
		outlet(3, x)
	}
}

function changeBPM (x) {
		speedChange = x;
		if (speedChange > bpm) {
			bpm = bpm + 3; //values tested: 2, 3, 5, 7. Value >= 7 to sudden.
			post(bpm);
		}
		else if (speedChange < bpm) {
			bpm = bpm - 3;
			post(bpm);
		} 
		else {
			bpm = bpm;
			post(bpm);
		}
		
		bang(bpm)
}

function getBPM(x) {
	bpm = x;
	outlet(0, bpm)
	outlet(1, 'bang')
	post(bpm)
	return bpm;
}
