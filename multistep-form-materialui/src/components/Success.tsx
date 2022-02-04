import React, { useState } from 'react'

const Success = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    // Proceed to the next step
    const nextStep = () => {
        setStep(step + 1);
    }

    // Proceed to the next step
    const prevStep = () => {
        setStep(step - 1);
    }

    // Proceed to the next step
    const handleChange = (input: any, e: any) => {
        setStep(step + 1);
    }

    return (
        <div>

        </div>
    )
}

export default Success
