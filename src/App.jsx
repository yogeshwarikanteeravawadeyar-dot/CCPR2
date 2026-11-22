import './App.css';
import { useState } from 'react';

function App() {
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  const handleStageClick = (stage) => {
    setSelectedStage(stage);
    setSelectedOptions([]);
    setShowDescription(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleDescriptionBox = () => {
    if (selectedOptions.length > 0) {
      setShowDescription(true);
    }
  };

  const stageOptions = {
    Stage1: ['Persistent cough', 'Mild chest pain or discomfort', 'Shortness of breath', 'Slight weight loss', 'Fatigue'],
    Stage2: ['Persistent, worsening cough', 'Blood in sputum', 'Severe chest pain', 'Shortness of breath', 'Unexplained weight loss', 'Fatigue and weakness', 'Wheezing', 'Changes in voice', 'Respiratory infections'],
    Stage3: ['Dizziness', 'Headaches', 'Difficulty swallowing', 'Severe fatigue and weakness', 'Persistent cough that may be painful', 'Bone pain']
  };

  const precautions = {
    'Persistent cough': 'Avoid irritants like smoke, stay hydrated, and consult a doctor if persistent.',
    'Mild chest pain or discomfort': 'Avoid physical exertion, and consult a doctor for persistent pain.',
    'Shortness of breath': 'Practice breathing exercises and avoid allergens or irritants.',
    'Slight weight loss': 'Maintain a healthy, balanced diet and monitor any further changes.',
    'Fatigue': 'Ensure proper rest and consume energy-boosting foods like fruits and nuts.',
    'Persistent, worsening cough': 'Avoid cold environments and seek medical attention promptly.',
    'Blood in sputum': 'Consult a doctor urgently to diagnose the underlying cause.',
    'Severe chest pain': 'Avoid stress, and consult a doctor immediately.',
    'Unexplained weight loss': 'Consult a healthcare professional to assess for underlying issues.',
    'Fatigue and weakness': 'Get sufficient sleep, eat a nutrient-rich diet, and manage stress effectively.',
    'Wheezing': 'Use prescribed inhalers, and avoid dust and allergens.',
    'Changes in voice': 'Rest your vocal cords and stay hydrated; avoid shouting or whispering excessively.',
    'Respiratory infections': 'Practice good hygiene, avoid crowded places, and stay well-hydrated.',
    'Dizziness': 'Stay hydrated, avoid sudden movements, and eat regularly to maintain blood sugar levels.',
    'Headaches': 'Reduce stress, practice relaxation techniques, and avoid triggers like bright light.',
    'Difficulty swallowing': 'Consume soft foods, and consult a specialist for persistent issues.',
    'Severe fatigue and weakness': 'Get adequate rest, maintain a balanced diet, and take prescribed supplements.',
    'Persistent cough that may be painful': 'Drink warm fluids, avoid cold environments, and seek medical advice.',
    'Bone pain': 'Maintain good posture, and consult a doctor for severe or persistent pain.'
  };

  const generateCombinedPrecautions = () => {
    return selectedOptions.map((option) => precautions[option]).join(' ');
  };

  return (
    <>
      <div className="lung-cancer">
        <div className="Stage1">
          <button onClick={() => handleStageClick('Stage1')}>Early Stage
          </button>
        </div>
        <div className="Stage2">
          <button onClick={() => handleStageClick('Stage2')}>Intermediate Stage
          </button>
        </div>
        <div className="Stage3">
          <button onClick={() => handleStageClick('Stage3')}>Advanced Stage</button>
        </div>
      </div>

      {selectedStage && (
        <div className="options-container">
          <h3>Select options for {selectedStage}:</h3>
          {stageOptions[selectedStage].map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={selectedOptions.includes(option) ? 'selected' : ''}
            >
              {option}
            </button>
          ))}
          <button
            onClick={handleDescriptionBox}
            disabled={selectedOptions.length === 0}
            className="submit-button"
          >
            Submit
          </button>
        </div>
      )}

      {showDescription && (
        <div className="description-box">
          <h3> Precautions:</h3>
          <p>{generateCombinedPrecautions()}</p>
        </div>
      )}
    </>
  );
}

export default App;
