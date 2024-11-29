# Employee Profile Application
Made by <b>Luisfemocha</b> for <b>Factored</b>

## How to Run
1. Install Docker and Docker Compose.
   - If your OS is Windows or MAC, download Docker Desktop 
   https://www.docker.com/products/docker-desktop/
   - If you are in a Linux distro follow these instructions
   https://docs.docker.com/desktop/setup/install/linux/
<br/><br/>
2. Ensure you have the latest version of Python (^3.12) and Node NPM (^20.17.0) and are connected to the internet.
<br/> <br/>
3. Clone the repository: (you may need to install git first)
   ```bash
   git clone https://github.com/luisfemocha/FactoredTestLuisChamorro.git
   cd FactoredTestLuisChamorro
   ```

3a. As a temporary fix, you'd have to manually install some packages and then run the back:
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
cd ..
```   

3b.  Front:
````bash
cd frontend
npm install
npm start
cd ..
````

4. Access the application by opening your browser and typing http://localhost:3000

---

This implementation satisfies all the requirements and provides a simple functional employee profile system. 
Please let me know if you need further clarifications via email or WhatsApp.


## Technologies used:
- Python v3.12
- Node NPM v20.17.0
- Docker
- FastAPI 0.115.5
- Uvicorn 0.32.1
- React
- MUI (Material UI for React)
- ChartJS

## Comments and possible improvements:
As said before, this code fulfills the requirements as sent in the 'Test Fullstack' document. 
However, some other functions where started but not completed, they are left commented as a possible future exercise.

Functions as:
* Reading all the employees.
* Signin up new employees.
* Updating or changing employee data.
* Removing an employee.
* Having like a password or any way to check before letting anyone see an employees info.

## Usage
This code was made using several open-source documentation, such as mui docs examples, stackoverflow entries and other resources.
For that, this code is open to use by anyone freely, a reference or sponsor are always welcome.

Luis Chamorro - Luisfemocha 2024