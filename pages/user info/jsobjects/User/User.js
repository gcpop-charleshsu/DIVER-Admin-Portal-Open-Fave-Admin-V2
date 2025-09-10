export default {
  showDetail: () => {
    storeValue('selectedUser', TableUserInfo.selectedRow);
    showModal(UD_Model.name);
  },
  
  updateDetail: async () => {
    try {
      if (UDF_FilePicker?.files?.[0]?.data) {
        await upload_user_icon.run();
      }
      
      await update_user.run();
      await get_all_user.run();
      closeModal(UD_Model.name);
    } catch (error) {
      showAlert(error.message || 'An error occurred while updating user', 'error');
    }
  },
  
  create: async () => {
    try {
      await create_user.run();
      await get_all_user.run();
      closeModal(CreateUserModal.name);
    } catch (error) {
      showAlert(error.message || 'An error occurred while creating user', 'error');
    }
  }
}