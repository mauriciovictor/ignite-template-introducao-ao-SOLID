import express from "express";

import swaggerUi from "swagger-ui-express";
import { usersRoutes } from "./routes/users.routes";

// eslint-disable-next-line import/no-unresolved
import swaggerConfig from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use("/users", usersRoutes);

export { app };
