import React, { useState, useEffect } from 'react';

const apiUrl = "https://pixelsandcookies.fr/server/api";
const apiEndpoint = apiUrl+"/survey.php";


export const Survey = (props) => {
    const Name = props.name;
    const [surveyData, setSurveyData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [cookie, setCookie] = useState( () => 
    {
        if(document.cookie.length !== 0 && typeof document.cookie.split(';').find((row) => row.startsWith(Name)) != 'undefined')
            return true;
    }); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndpoint+'?name='+Name);
                const data = await response.json();
                console.log(data);
                setSurveyData(data);
            } catch (error) {
            console.error('Erreur lors de la récupération des données du sondage : ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const updateSelectedOption = async () => {
          if (selectedOption !== null) {
            try {
                const response = await fetch(apiEndpoint + '?name=' + Name + '&id=' + selectedOption);
                const data = await response.json();
                setSurveyData(data);
                setCookie(() => {
                    document.cookie = Name + "=true\;";
                });
                document.getElementsByName(Name).forEach((el) => el.disabled = true);

                console.log('Données envoyées avec succès !');
            } catch (error) {
                console.error('Erreur lors de l\'envoi des données : ', error);
            }
          }
        };
    
        updateSelectedOption();
      }, [selectedOption, Name]);
    
  const handleOptionChange = async (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
        {surveyData ? (
    <form>
        {surveyData.options.map((option) => (
        <div key={option.id}>
            <div className="input">
            {!cookie && 
            <input
                type="radio"
                id={option.id}
                name={Name}
                value={option.count}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
            />}
            <label htmlFor={option.id}>{option.text}<span>{Math.round((option.count*100)/surveyData.total)}%</span></label>
            </div>
            <div className="progressBar">
                <div className="filler" style={{width: Math.round((option.count*100)/surveyData.total) + '%'}}></div>
            </div>
        </div>
        ))} 
    </form>
    ) : (
        <p>Chargement en cours...</p>
    )}
    </div>
  );
};

