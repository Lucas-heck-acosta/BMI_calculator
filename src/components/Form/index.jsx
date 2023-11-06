import { useState } from "react"
import styles from './Form.module.css';

const Form = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const getBracket = (BMI) => {
        let bracket = "";

        if (BMI < 18.5) {
            bracket = "Underweight";
        } else if (BMI >= 18.5 && BMI < 25) {
            bracket = "Normal-Weight";
        } else if (BMI >= 25 && BMI < 30) {
            bracket = "Overweight";
        } else {
            bracket = "Obese";
        }
        return bracket;
    }
    const renderResult = () => {
        const heightMeter = height / 100;
        const BMI = weight / heightMeter ** 2;
        const bracket = getBracket(BMI);

        if (height > 0 && weight > 0)
        {
            return (
                <div className={`${styles[bracket.toLowerCase()]} ${styles.result}`}>
                    <h3>BMI: {BMI.toFixed(2)}</h3>
                    <h3>{bracket}</h3>
                </div>
            )
        }

        
    }
    return (
        <div className="container">
            <form className={styles.form}>
                <input type="number" className={styles.input} placeholder="Height (cm)" required onChange={e => setHeight(parseFloat(e.target.value))}/>
                <input type="number" className={styles.input} placeholder="Weight (kg)" required onChange={e => setWeight(parseFloat(e.target.value))}/>
            </form>
            {renderResult()}

        </div>
    )
}

export default Form;