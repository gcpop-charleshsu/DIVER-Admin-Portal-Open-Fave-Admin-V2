export default {
	form_reset () {
		form_q.setValue("");
		form_state.setSelectedOption("");
		form_visiable.setSelectedOption("")
	},
	UpdateSubmit() {
		const visibility = (ModalVisibility.selectedOptionValue === 'true');
    toke_update.run({visibility: visibility}).then(() => {
			showAlert("Info update successfully!", "success");
			token_search.run()
			ModalResult.setText("Result");
			ModalResult.setTextColor("black");
			closeModal(ModalTokenDetail.name)
		}).catch((error) => {
			console.log("API Response:", toke_update.data);
			console.log("API Headers:", toke_update.responseMeta);
			showAlert("Error: " + JSON.stringify(toke_update.data), "error");
			ModalResult.setText(toke_update.data.error);
			ModalResult.setTextColor("red");
		});
  },
}