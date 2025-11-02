module.exports = {
    handler: async (event) => {
        console.log("event:", JSON.stringify(event));
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Hello, Sri Lanka!" })
        };
    }
};

// Test case for the handler function
const { handler } = require('../handler');

describe('Handler Function', () => {
    it('should return a 200 status and a message', async () => {
        const event = {}; // Mock event
        const response = await handler(event);
        
        expect(response.statusCode).toBe(200);
        expect(response.headers['Content-Type']).toBe('application/json');
        expect(JSON.parse(response.body).message).toBe('Hello, Sri Lanka!');
    });
});