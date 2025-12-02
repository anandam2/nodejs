let person = {
    fullName : "  Sarah Johnson  ",
    welcomeMsg : "   Welcome to the new platform! Hope you enjoy your stay.     ",
formatDetails () {
    let trimmedName = this.fullName.trim();
    let trimmedMsg = this.welcomeMsg.trim();

    console.log("=== String Manipulation Results ===");
    console.log("First character of full name:", trimmedName.charAt(0));
    console.log("Total characters in welcome message:", this.welcomeMsg.length);
    console.log("First 15 chars (slice):", this.welcomeMsg.slice(0, 15));
    console.log("First 15 chars (substring):", this.welcomeMsg.substring(0, 15));
    console.log("Full name in uppercase:", trimmedName.toUpperCase());
    console.log("Welcome message in lowercase:", trimmedMsg.toLowerCase());
    console.log("Trimmed welcome message:", trimmedMsg);
    console.log("Split full name:", trimmedName.split(" "));
    let lowerMsg = trimmedMsg.toLowerCase();
    console.log("Position of 'welcome':", lowerMsg.indexOf("welcome"));
    console.log("Combined string:", `${trimmedName} - ${trimmedMsg}`);
  }
}
person.formatDetails()