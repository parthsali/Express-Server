import app from "./src/app";
import { config } from "./src/config/config";

const startServer = async () => {
  const PORT = config.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
