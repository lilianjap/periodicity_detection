inlets = 4;
outlets = 2;

var bpm = 0;

//f0: fundamental frequency, pq: quality of detected periodicity 
var f0_x; var pq_x;
var f0_y; var pq_y;
var f0_z; var pq_z;

var x_traj = [];
var y_traj = [];
var z_traj = [];

var best_quality_factor;


function list () { 
	if (inlet == 0) {
		f0_x = arguments[0]
		pq_x = arguments[1] 
		outlet(0, f0_x);
		outlet(1, pq_x);
	} 	
	if (inlet == 1) {
		f0_y = arguments[0]
		pq_y = arguments[1] 
	} 	
	if (inlet == 2) {
		f0_z = arguments[0]
		pq_z = arguments[1] 
	} 
	
	x_traj = [f0_x, pq_x]
	y_traj = [f0_y, pq_y]
	z_traj = [f0_z, pq_z]
	
	if (inlet == 3){
		best_quality_factor = arguments[0];
	}
	
	send_f0_of_best_periodic_trajectory(x_traj, y_traj, z_traj, best_quality_factor);
}

function send_f0_of_best_periodic_trajectory(X_traj, Y_traj, Z_traj, BQF){
	if (X_traj[1] == BQF) {
		outlet(0, X_traj[0])
		outlet(1, X_traj[1])
		post('X')
	}
	else if (Y_traj[1] == BQF) {
		outlet(0, Y_traj[0])	
		outlet(1, Y_traj[1])
		post('Y')
	}
	else if (Z_traj[1] == BQF) {
		outlet(0, Z_traj[0])
		outlet(1, Z_traj[1])		
		post('Z')
	} else {
	return
	}
	
}
	


function bang() {
	
}

function anything(){
	
}
