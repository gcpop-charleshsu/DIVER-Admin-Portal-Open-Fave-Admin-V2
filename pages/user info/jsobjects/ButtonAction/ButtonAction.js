export default {
    form_reset() {
        // Clear the search fields
        UserInfoSearchInput.setValue("");
        UserInfoSearchVisiable.setSelectedOption("none");
        
        // The table should maintain its page due to maintainPageOnDataChange setting
        // Just refresh the data
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
