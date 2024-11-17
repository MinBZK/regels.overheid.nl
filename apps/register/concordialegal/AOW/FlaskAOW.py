from datetime import date, timedelta
import datetime
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

def add_months(current_date, months_to_add):
    new_date = date(current_date.year + (current_date.month + months_to_add - 1) // 12,
                    (current_date.month + months_to_add - 1) % 12 + 1,
                    current_date.day)
    return new_date

def leeftijd_AOW_Maanden(currentdate):
    year = currentdate.year
    if year == 2020:
        monthsAgeAOW = 66 * 12 + 4
    elif year == 2021:
        monthsAgeAOW = 66 * 12 + 7
    elif year == 2022:
        monthsAgeAOW = 66 * 12 + 7
    elif year == 2023:
        monthsAgeAOW = 66 * 12 + 10
    elif year in [2024, 2025, 2026]:
        monthsAgeAOW = 67 * 12
    else:
        monthsAgeAOW = 67 * 12
    return monthsAgeAOW

@app.route('/resultaat', methods=["POST", "GET"])
def resultAOW(): 
    callParams = request.get_json()
    
    if not callParams or len(callParams.keys()) < 2:
        return jsonify({"Status": "Bad input"}), 400
    
    format = '%Y-%m-%d'
    try:
        birthdate = datetime.datetime.strptime(callParams['birthdate'], format)
        currentdate = datetime.datetime.strptime(callParams['currentdate'], format)
    except ValueError:
        return jsonify({"Status": "Invalid date format. Use YYYY-MM-DD"}), 400
    
    calculation_date = add_months(birthdate.date(), leeftijd_AOW_Maanden(currentdate.date()))
    return jsonify({"calculation": calculation_date.strftime(format)})

# New route for rendering the HTML file
@app.route('/')
def home():
    return render_template('home.html')

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)