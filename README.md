# Project Root

- README.md
- package.json
- .env (optional)
- tsconfig.json (optional)
- jest.config.js (optional)
- dockerfile (optional)
- docker-compose.yml (optional)

# Source Code (src)

- **api** (Core functionalities organized by domain)
  - **auth**
    - authRouter.ts
    - authController.ts
    - authService.ts
    - authModels.ts (User model with type discrimination for Student/Teacher)
  - **users** (Optional, only for user-specific functionalities)
    - userRouter.ts
    - userController.ts
    - userService.ts
    - userModel.ts (Base user model)
  - **students** (Student-specific functionalities)
    - studentRouter.ts
    - studentController.ts
    - studentService.ts
    - studentModels.ts (Models specific to students, e.g., Team, Project)
  - **teams**
    - teamRouter.ts
    - teamController.ts
    - teamService.ts
    - teamModel.ts
  - **projects**
    - projectRouter.ts
    - projectController.ts
    - projectService.ts
    - projectModel.ts
  - **notices**
    - noticeRouter.ts
    - noticeController.ts
    - noticeService.ts
    - noticeModel.ts
  - **assessments**
    - assessmentRouter.ts
    - assessmentController.ts
    - assessmentService.ts
    - assessmentModel.ts
  - **guideAssignments**
    - guideAssignmentRouter.ts
    - guideAssignmentController.ts
    - guideAssignmentService.ts
    - guideAssignmentModel.ts
  - **reviewerAssignments**
    - reviewerAssignmentRouter.ts
    - reviewerAssignmentController.ts
    - reviewerAssignmentService.ts
    - reviewerAssignmentModel.ts
  - **sponsorships**
    - sponsorshipRouter.ts
    - sponsorshipController.ts
    - sponsorshipService.ts
    - sponsorshipModel.ts
  - **statistics**
    - statisticsRouter.ts
    - statisticsController.ts
    - statisticsService.ts
    - statisticsModel.ts (Optional, may not need a model)
- **config**
  - config.ts
  - db.ts
- **middleware**
  - authMiddleware.ts
  - errorHandlingMiddleware.ts
  - loggingMiddleware.ts
- **logging** (Dedicated folder for logging concerns)
  - logger.ts (Configuration and core logging functionality)
  - formatters.ts (Optional, custom log formatters)
  - transports.ts (Configuration for different log transports)
- **models** (Optional, only if base models are needed)
  - User.ts (Base user model)
- **services** (Optional, consider co-locating with controllers for better organization)
  - ... (service files from corresponding API folders)
- **utils**
  - validation.ts
  - helpers.ts
- **types** (Optional)
  - ... (Type definitions for relevant models)

**Explanation:**

- Clear domain separation in `api`.
- Student-specific models in `students`.
- Optional base models in `models`.
- Dedicated `logging` folder for logging configuration.

**Additional Considerations:**

- Scalability with microservices (for large projects).
- Unit and Integration Testing.
- Security (Authentication, Authorization).
- API Documentation.
- Version Control (Git).

**Logging Files:**

- Location depends on `logging/transports.ts` configuration.
- Common choices: dedicated `logs` folder or external directory.
- Multiple log files offer better organization and manageability.
