class UserService {
    constructor() { }

    authenticateUser(username: string, password: string): boolean {
        // Logic for user authentication
        return true;
    }

    sendEmailNotification(email: string, message: string) {
        // Logic for sending email notification
    }
}

/* UserService class violates SRP because it has two responsibilities: 
   user authentication and sending email notifications. 
*/
