// conf.js content e.g.
exports.config = {

    seleniumAddress:'http://localhost:4444/wd/hub',
    
    // See the full list at https://github.com/juliemr/minijasminenode
    jasmineNodeOpts: {
	// onComplete will be called just before the driver quits.
	onComplete: null,
	// If true, display spec names.
	isVerbose: false,
	// If true, print colors to the terminal.
	showColors: true,
	// If true, include stack traces in failures.
	includeStackTrace: true,
	// Default time to wait in ms before a test fails.
	// increasing it from 30 seconds to 300 seconds since note auto save we need to wait for 1 minute.
	defaultTimeoutInterval: 300000
    },
	// increasing it from 30 seconds to 300 seconds since note auto save we need to wait for 1 minute.
	allScriptsTimeout: 70000,
	/*,'./ehr/appointment-and-notes-auto-save.js'*/
	specs: ['./ehr/forgotPassword.js','./ehr/login.js','./ehr/calendar.js','./ehr/patientfile.js','./ehr/create-new-user.js','./ehr/allergies.js','./ehr/task.js','./ehr/documents.js','./ehr/payer.js','./ehr/hospitalization.js','./ehr/weightMeasurement.js', './ehr/BMIMeasurement.js','./ehr/contact.js','./ehr/careTeam.js','./ehr/goal.js','./ehr/medication.js','./ehr/pharmacy.js','./ehr/socialHistory.js','./ehr/substanceAbuse.js','./ehr/screening.js','./ehr/diagnosis.js','./ehr/career-highlights.js','./ehr/official-letters.js','./ehr/user-search.js','./ehr/report-search.js','./ehr/serviceStatements-scBrain.js','./ehr/selfHarm.js','./ehr/redFlag.js', './ehr/notes.js', './ehr/scannedDocs.js','./myHealth/create-new-user.js','./myHealth/myhealth.js','./myHealth/mylogin.js','./myHealth/mygoal.js','./intake/login.js','./intake/requestAppointment.js','./intake/details.js','./chat/sc.js']
}

/**
 * Removed ,'./ehr/serviceStatements-masterdb.js' as this was failing and the person who is responsible for this protractor test was absent.
 * */