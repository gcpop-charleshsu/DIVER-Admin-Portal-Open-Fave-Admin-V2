export default {
	 showDetail: () => {
		  storeValue('selectedUser', TableUserInfo.selectedRow)
			showModal('UD_Model');
	},
	updateDetail: () => {
		update_user.run().then(() => {
			get_all_user.run()
			closeModal('UD_Model')
		}).catch((error) => {
			showAlert(error.message || 'An error occurred while updating user', 'error');
		})
	},
}
