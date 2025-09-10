export default {
	 showDetail: () => {
		  storeValue('selectedRegister', registration_table.selectedRow)
			showModal(registration_detail_model.name);
	},
	updateDetail: () => {
		update_registration_api.run().then(() => {
			get_registration_api.run()
			closeModal(registration_detail_model.name)
		}).catch((error) => {
			// ErrorMessage.setText(error.message || 'An error occurred while updating registration')
			showAlert(error.message || 'An error occurred while updating registration', 'error');
		})
	},
	importUser: () => {
		create_user.run().then(() => {
			get_registration_api.run()
		}).catch((error) => {
			showAlert(error.message || 'An error occurred while import user', 'error');
		})
		// delete_registration_api.run().then(() => {
		// 	get_registration_api.run()
		// }).catch((error) => {
		// 	showAlert(error.message || 'An error occurred while delete registration', 'error');
		// })
		closeModal(registration_detail_model.name)
	}
}
