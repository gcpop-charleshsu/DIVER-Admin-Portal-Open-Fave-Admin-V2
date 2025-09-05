export default {
	uploadIcon() {
		uploadIcon.run().then(() => {
			result.setText("Upload icon success");
			result.setTextColor("green");
		}).catch((error) => {
			console.log(error)
			result.setText(uploadIcon.data.error);
			result.setTextColor("red");
		})
	},
	tokenDraft() {
		draftToken.run().then(() => {
			result.setText("Draft success");
			result.setTextColor("green");
		}).catch((error) => {
			console.log(error)
			result.setText(draftToken.data.error);
			result.setTextColor("red");
		})
	},
	tokenExcute() {
		excuteToken.run().then(() => {
			result.setText("Excute success, now deploying");
			result.setTextColor("green");
		}).catch((error) => {
			console.log(error)
			result.setText(excuteToken.data.error);
			result.setTextColor("red");
		})
	}
}