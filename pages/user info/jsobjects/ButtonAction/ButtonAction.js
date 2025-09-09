export default {
	// Create User Form Validation and Processing
	// Form validation and processing for create user
	processCreatorName(value) {
		// Remove .of suffix if user typed it
		if (!value) return '';
		const cleaned = value.replace(/\.of$/i, '');
		return cleaned;
	},
	
	validateWalletAddress(address) {
		// Validate Ethereum address format
		const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
		return ethAddressRegex.test(address);
	},
	
	handleCreateUser() {
		// Process creator name
		const creatorName = this.processCreatorName(CreatorNameInput.text);
		
		// Validate wallet address
		if (!this.validateWalletAddress(CreatorWalletInput.text)) {
			showAlert("Invalid Ethereum wallet address format (0x...)", "error");
			return;
		}
		
		// Validate required fields
		if (!creatorName) {
			showAlert("Creator name is required", "error");
			return;
		}
		if (!CreatorWalletInput.text) {
			showAlert("Wallet address is required", "error");
			return;
		}
		if (!InstagramIdInput.text) {
			showAlert("Instagram ID is required", "error");
			return;
		}
		
		// Prepare the payload
		const payload = {
			creator_name: creatorName + ".of",
			creator_sub_wallet_address: CreatorWalletInput.text,
			creator_description: CreatorDescriptionInput.text || "None",
			agent_name: AgentNameInput.text || "nonono",
			instagram_id: InstagramIdInput.text,
			youtube_id: YoutubeIdInput.text || "nonono",
			tiktok_id: TiktokIdInput.text || "nonono",
			x_id: XIdInput.text || "nonono",
			random: parseFloat(RandomInput.text) || 0.1,
			visibility: VisibilitySwitch.isSwitchedOn || false
		};
		
		console.log("Creating user with payload:", payload);
		
		// Run the create user API
		create_user.run()
			.then(() => {
				showAlert("User created successfully!", "success");
				closeModal("CreateUserModal");
				// Refresh the user list
				get_all_user.run();
				// Reset form
				this.resetCreateUserForm();
			})
			.catch((error) => {
				const errorMsg = error?.message || error?.data?.error || "Failed to create user";
				showAlert(errorMsg, "error");
			});
	},
	
	resetCreateUserForm() {
		CreatorNameInput.setValue("");
		CreatorWalletInput.setValue("");
		CreatorDescriptionInput.setValue("");
		AgentNameInput.setValue("");
		InstagramIdInput.setValue("");
		YoutubeIdInput.setValue("");
		TiktokIdInput.setValue("");
		XIdInput.setValue("");
		RandomInput.setValue("0.1");
		VisibilitySwitch.setIsSwitchedOn(false);
	},
	
	form_reset () {
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