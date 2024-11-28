from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, ...)
    allow_headers=["*"]
)

@app.get("/employee/{employee_id}")
def get_employee(employee_id: int):
    with open("sampleDatabase.JSON", "r") as d:
        db = json.load(d)

    employee = next((e for e in db["employees"] if e["id"] == employee_id), None)

    if not employee:
        return {"error": "Employee not found"}
    return employee

