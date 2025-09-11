export default {
  showDetail: () => {
    storeValue('selectedUser', TableUserInfo.selectedRow);
		search_user.run()
    showModal(UD_Model.name);
  },
  
  updateDetail: async () => {
    try {
      if (UDF_FilePicker_Profile?.files?.[0]?.data) {
        await admin_upload_user_profile_icon.run();
      }
			
      if (UDF_FilePicker_Avatar?.files?.[0]?.data) {
        await admin_upload_user_avatar_icon.run();
      }
      
      await admin_update_user.run();
      await get_all_user.run();
      closeModal(UD_Model.name);
    } catch (error) {
      showAlert(error.message || 'An error occurred while updating user', 'error');
    }
  },
  
  create: async () => {
    try {
      await admin_create_user.run();
      await get_all_user.run();
      closeModal(CreateUserModal.name);
    } catch (error) {
      showAlert(error.message || 'An error occurred while creating user', 'error');
    }
  }
}