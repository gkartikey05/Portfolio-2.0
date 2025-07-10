// Entry point for starting the server and connecting to services
import app from "./app.js";

const PORT = process.env.PORT || 5000;

// Start the Express server and connect to MongoDB
app.listen(PORT, async () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
