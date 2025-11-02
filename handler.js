exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event));
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Hello, Sri Lanka!" })
    };
};
