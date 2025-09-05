export default {
	CreateTokenSubmit() {
    createToken.run().then(() => {
			showAlert("Token created successfully!", "success");
			result.setText("Success");
			result.setTextColor("green");
		}).catch((error) => {
			console.log("API Response:", createToken.data);
			console.log("API Headers:", createToken.responseMeta);
			showAlert("Error: " + JSON.stringify(createToken.data), "error");
			result.setText(createToken.data.error);
			result.setTextColor("red");
		});
  }
}