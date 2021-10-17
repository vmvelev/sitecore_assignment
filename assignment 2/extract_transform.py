import requests
import json
import pandas

url = "https://api.capturedata.com/"
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

csv = pandas.DataFrame(pandas.read_csv("input_data.csv", sep=","))
csv.to_json("data.json", orient="records", indent=1)

f = open('data.json')
data = json.load(f)
for i in data:
    response = requests.post(url, data=i, headers=headers)
f.close()