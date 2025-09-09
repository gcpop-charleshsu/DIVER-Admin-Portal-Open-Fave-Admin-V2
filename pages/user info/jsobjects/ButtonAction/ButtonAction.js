export default {
    form_reset() {
        UserInfoSearchInput.setValue("");
        UserInfoSearchVisiable.setSelectedOption("none");
        // After resetting, reload all users
        get_all_user.run();
    },

    handleSearch() {
        // Search is handled automatically by search_user query
        // which watches UserInfoSearchInput.text
        // This prevents double reload
        const searchText = UserInfoSearchInput.text;
        if (!searchText || searchText.trim() === '') {
            // Only manually trigger get_all_user when clearing search
            get_all_user.run();
        }
    }
}
