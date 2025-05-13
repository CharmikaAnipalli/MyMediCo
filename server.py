from flask import Flask, request, jsonify
from model.recommender import recommend_treatment

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    symptoms = data.get("symptoms", "")
    recommendation = recommend_treatment(symptoms)
    return jsonify({"recommendation": recommendation})

if __name__ == '__main__':
    app.run(debug=True)
