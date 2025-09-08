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
		// Since the RichTextEditor is in markdown mode, just use the text directly
		const text = ModalRichTE.text;
		
		console.log("Text to update:", text);
		console.log("Text length:", text.length);
		console.log("Contains newlines:", text.includes('\n'));

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
		// Since the RichTextEditor is in markdown mode, just use the text directly
		const text = ModalRichTECreate.text;
		
		console.log("Text to insert:", text);
		console.log("Text length:", text.length);
		console.log("Contains newlines:", text.includes('\n'));

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
  },
	searchClick() {
		if (search_keyword.text != "") {
			search_info.run()
		} else {
			character_info.run()
		}
	},
}