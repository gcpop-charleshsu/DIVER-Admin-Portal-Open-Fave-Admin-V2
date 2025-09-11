export default {
	execute: async (textToCopy, alertMessage = 'Copied to clipboard!') => {
		if (!textToCopy) {
			showAlert('Error: Nothing to copy.', 'error');
			return;
		}
		
		try {
			await copyToClipboard(textToCopy);
			showAlert(alertMessage, 'success');
		} catch (e) {
			console.error("Copy failed: ", e);
			showAlert('Error: Could not copy text.', 'error');
		}
	}
}
