export default {
	 showDetail: () => {
		  storeValue('selectedRegister', registration_table.selectedRow)
			showModal('registration_detail_model');
			// showAlert(UserTable.selectedRow.creator_name + ' Selected', 'success');
			// closeModal('UserSelectModal');
	},
	updateDetail: () => {
		update_registration_api.run().then(() => {
			get_registration_api.run()
			closeModal('registration_detail_model')
		}).catch((error) => {
			ErrorMessage.setText(error.message || 'An error occurred while updating registration')
		})
	},
}
