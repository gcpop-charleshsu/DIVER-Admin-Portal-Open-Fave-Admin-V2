export default {
	InfoDelete() {
		delete_info.run().then(() => {
			showAlert("Info delete successfully!", "success");
			character_info.run()
			closeModal(ModalDetail.name)
			ModalDetailResult.setText("Result");
			ModalDetailResult.setTextColor("black");
		}).catch((error) => {
			console.log("API Response:", delete_info.data);
			console.log("API Headers:", delete_info.responseMeta);
			showAlert("Error: " + JSON.stringify(delete_info.data), "error");
			ModalDetailResult.setText(delete_info.data.error);
			ModalDetailResult.setTextColor("red");
		});
  },
	UpdateSubmit() {
		const html = ModalRichTE.text
		const temp = document.createElement("div");
		temp.innerHTML = html;
		const text = temp.innerText;
		console.log(text);

    update_info.run({context: text}).then(() => {
			showAlert("Info update successfully!", "success");
			character_info.run()
			closeModal(ModalDetail.name)
		}).catch((error) => {
			console.log("API Response:", update_info.data);
			console.log("API Headers:", update_info.responseMeta);
			showAlert("Error: " + JSON.stringify(update_info.data), "error");
			ModalDetailResult.setText(update_info.data.error);
			ModalDetailResult.setTextColor("red");
		});
  },
	CreateSubmit() {
		const html = ModalRichTECreate.text;
		const temp = document.createElement("div");
		temp.innerHTML = html;
		const text = temp.innerText;
		console.log(text);

    insert_info.run({context: text}).then(() => {
			showAlert("Info create successfully!", "success");
			character_info.run()
			closeModal(ModalCreate.name)
		}).catch((error) => {
			console.log("API Response:", insert_info.data);
			console.log("API Headers:", insert_info.responseMeta);
			showAlert("Error: " + JSON.stringify(insert_info.data), "error");
			ModalCreateResult.setText(insert_info.data.error);
			ModalCreateResult.setTextColor("red");
		});
  }
}