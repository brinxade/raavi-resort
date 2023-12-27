const contactSubmissionModel = new mongoose.Schema ({
	name: String,
	email: String,
	phone: String,
	date: Date,
	event: String,
	message: String
});

module.exports = mongoose.model("ContactSubmission", contactSubmissionModel, "ContactSubmission");