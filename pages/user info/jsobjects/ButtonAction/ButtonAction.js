export default {
    form_reset() {
        // Clear the search fields
        UserInfoSearchInput.setValue("");
        UserInfoSearchVisiable.setSelectedOption(""); // Empty value = All Users
        storeValue('visibilityFilter', ''); // Clear stored filter
        
        // Clear search results and show all users
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
