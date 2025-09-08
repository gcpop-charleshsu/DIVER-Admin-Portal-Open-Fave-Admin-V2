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
		const content = ModalRichTE.text;
		let text = content;
		
		// Check if content is HTML (contains tags) or markdown
		if (content.includes('<') && content.includes('>')) {
			// HTML content - convert breaks to newlines
			text = content
				.replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')  // Paragraph breaks
				.replace(/<br\s*\/?>/gi, '\n')           // Line breaks
				.replace(/<\/div>\s*<div[^>]*>/gi, '\n') // Div breaks
				.replace(/<\/li>\s*<li[^>]*>/gi, '\n')   // List item breaks
				.replace(/<[^>]*>/g, '')                 // Remove remaining tags
				.replace(/&nbsp;/g, ' ')                 // Non-breaking spaces
				.replace(/&lt;/g, '<')                   // HTML entities
				.replace(/&gt;/g, '>')
				.replace(/&amp;/g, '&')
				.replace(/&quot;/g, '"')
				.replace(/&#39;/g, "'");
		}
		// For markdown or plain text, preserve as-is
		
		console.log("Text to update:", text);

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
		const content = ModalRichTECreate.text;
		let text = content;
		
		// Check if content is HTML (contains tags) or markdown
		if (content.includes('<') && content.includes('>')) {
			// HTML content - convert breaks to newlines
			text = content
				.replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')  // Paragraph breaks
				.replace(/<br\s*\/?>/gi, '\n')           // Line breaks
				.replace(/<\/div>\s*<div[^>]*>/gi, '\n') // Div breaks
				.replace(/<\/li>\s*<li[^>]*>/gi, '\n')   // List item breaks
				.replace(/<[^>]*>/g, '')                 // Remove remaining tags
				.replace(/&nbsp;/g, ' ')                 // Non-breaking spaces
				.replace(/&lt;/g, '<')                   // HTML entities
				.replace(/&gt;/g, '>')
				.replace(/&amp;/g, '&')
				.replace(/&quot;/g, '"')
				.replace(/&#39;/g, "'");
		}
		// For markdown or plain text, preserve as-is
		
		console.log("Text to insert:", text);

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