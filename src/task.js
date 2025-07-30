// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
        this.priority = 'medium'; // default
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }

    /**
     * Set the priority of the task
     * @param {string} priority - One of: 'low', 'medium', 'high', 'urgent'
     * @returns {boolean} true if set, false otherwise
     */
    setPriority(priority) {
        const validPriorities = ['low', 'medium', 'high', 'urgent'];
        if (validPriorities.includes(priority)) {
            this.priority = priority;
            return true;
        }
        return false;
    }
}

module.exports = Task;
