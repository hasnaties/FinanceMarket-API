### Code Refinement

- Configuration Service for the app.
- Global Prefix for routes.
- Project structure Changes
  - Replaced Utils with Controllers
  - Express application naming conventions
  - AuthRouter for login endpoint
- Single export file for all the routes.
- Single export file for all the middlewares.
- Handled database connection failure exception.

## Overview

In the current state, the API offers service for three primary endpoint types:

### Profile

- Fetch profile with details.
- Login endpoint to authenticate.
- Update last active status of the user.

### Product

- Fetch the products list from the DB.

### Blog

- Fetch the news feed list from the DB.
