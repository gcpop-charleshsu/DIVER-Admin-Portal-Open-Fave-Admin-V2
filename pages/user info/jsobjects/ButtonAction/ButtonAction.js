export default {
    form_reset() {
        UserInfoSearchInput.setValue("");
        UserInfoSearchVisiable.setSelectedOption("none");
        // After resetting, reload all users
        get_all_user.run();
    },

    handleSearch() {
        const searchText = UserInfoSearchInput.text;
        if (searchText && searchText.trim() !== '') {
            // Run search query when there's search text
            search_user.run();
        } else {
            // Load all users when search is empty
            get_all_user.run();
        }
    }
}
