import React, { useState } from 'react';
import surveyJson from '../../data/survey';


export const Survey = (props) => {

    const Name = props.name;
    const Json = surveyJson[Name];
    const Items = Json["items"];
    const [sauceBarbecue, setSauceBarbecue] = useState(Math.round((Items["barbecue"]*100)/Json["total"]));
    const [sauceBearnaise, setSauceBearnaise] = useState(Math.round((Items["bearnaise"]*100)/Json["total"]));
    const [cookie, setCookie] = useState( () => 
    {
        if(document.cookie.length !== 0 && typeof document.cookie.split(";").find((row) => row.startsWith(Name)) !== "undefined")
            return true;
    });
    const handleChange = (e) => {
        var id = e.target.id;
        var datas = {};

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost/lets-go-to-the-summer/src/api/survey.php?id="+id+"&name="+Name);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200){
                datas = JSON.parse(xhttp.responseText);
                var items = datas.items;
                var total = datas.total;

                setSauceBarbecue((items.barbecue*100)/total);
                setSauceBearnaise((items.bearnaise*100)/total);

                setCookie(() => {
                    document.cookie = Name +"=true\;";
                });

                document.getElementsByName(Name).forEach((el) => el.disabled = true);
            }
        };
        xhttp.send();
    };


    return (
        <form action="survey.php" method="get">
            <div>  
                <div className="input">
                    {!cookie && 
                    <input type="radio" value="0" id="barbecue" name={Name} onChange={(event) => handleChange(event)} /> 
                    }
                    <label htmlFor="barbecue">Team barbecue <span>{sauceBarbecue}%</span></label>
                </div>
                <div className="progressBar"><div className="filler" style={{width: sauceBarbecue + '%'}}></div></div>
            </div>
            <div>
                <div className="input">
                    {!cookie && 
                    <input type="radio" value="1" id="bearnaise" name={Name} onChange={(event) => handleChange(event)}/>
                    }
                    <label htmlFor="bearnaise">Team béarnaise <span>{Math.round(sauceBearnaise)}%</span></label>
                </div>
                <div className="progressBar">
                    <div className="filler" style={{width: sauceBearnaise + '%'}}></div>
                </div>
            </div>
        </form>
    );
};
