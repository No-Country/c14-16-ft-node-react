import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
      openapi: "3.0.0",
      info: { title: "Doggy's house API", version: "1.0.0" },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
    apis: ["./src/routes/AuthRouter.js", "./src/routes/AnimalTypeRouter.js" ,
    "./src/routes/BookingRouter.js", "./src/routes/BranchRouter.js",
    "./src/routes/ClientRouter.js" ,"./src/routes/CompanyRouter.js",
    "./src/routes/PetRouter.js", "./src/routes/ServiceRouter.js"],
};
  

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/docs`
  );
};