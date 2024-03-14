from datetime import date, timedelta
import datetime
from flask_cors import CORS  # Import the CORS extension

from flask import Flask,request
app = Flask(__name__)

CORS(app)  

def add_months(current_date, months_to_add):
    new_date = date(current_date.year + (current_date.month + months_to_add - 1) // 12,
                        (current_date.month + months_to_add - 1) % 12 + 1,
                        current_date.day)
    return new_date

def leeftijd_AOW_Maanden (currentdate):
  year = currentdate.year
  if year == 2020:
     monthsAgeAOW = 66 * 12 + 4
  elif year == 2021:
     monthsAgeAOW = 66 * 12 + 7
  elif year == 2022:
     monthsAgeAOW = 66 * 12 + 7
  elif year == 2023:
     monthsAgeAOW = 66 * 12 + 10
  elif year == 2024:
     monthsAgeAOW = 67 * 12 + 0
  elif year == 2025:
     monthsAgeAOW = 67 * 12 + 0
  elif year == 2026:
     monthsAgeAOW = 67 * 12 + 0
  else:
     monthsAgeAOW = 67 * 12
  return monthsAgeAOW

@app.route('/resultAOW',methods = ["POST","GET"])
def resultAOW(): 
#def datum_AOW (birtdate, currentdate): 
  callParams= request.get_json()
    
  if len(callParams.keys()) < 2:
     return {"Status":"Bad input"}
  
  format = '%Y-%m-%d'
  #datetime.datetime.strptime(input, format)
  birthdate = datetime.datetime.strptime(str(callParams['birthdate']),format)
  currentdate = datetime.datetime.strptime(str(callParams['currentdate']),format)
  cal = {}
  cal['calculation'] = add_months(birthdate.date(), leeftijd_AOW_Maanden(currentdate.date())).strftime(format)
  #cal['calculation'] = birtdate+currentdate  
  return (cal)
  #return add_months(birtdate, leeftijd_AOW_Maanden(currentdate))
 
# Example usage
#current_date = date(2023, 1, 15)
#birth_date = date(1971,3,18)

#print(leeftijd_AOW_Maanden(current_date)) 
#print(datum_AOW(birth_date,current_date))
