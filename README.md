# Build a Random Quote Machine

## Objective

Build an app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/ONjoLe/.

## Requirements

* User Story: I can click a button to show me a new random quote.

* User Story: I can press a button to tweet out a quote.

## Notes

### Dev

#### Prerequisites
- Docker and Docker Compose installed

#### Run using Docker Compose
```bash
# build and start the containers
docker compose up --build

# stop the containers
docker compose down
```

#### Access the App
```bash
# Open in web browser
http://localhost:3050
```

#### Containers
- **client**: React frontend (Node.js + Nginx) - port 3000
- **api**: Quote API backend - port 8000
- **nginx**: Reverse proxy - port 3050

### Architecture
![image](https://user-images.githubusercontent.com/20388583/112771338-53c54d00-8ff9-11eb-9e1a-dd8f2f34debf.png)