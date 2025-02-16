import { useState, ChangeEvent } from 'react'

/**
 * Build a Multi-Step Form
 * Create a multi-step form where users can navigate between different steps of the form.
 */
const MultiStepForm = () => {
  const initialState = {
    step1: '',
    step2: '',
    step3: '',
  }
  const [stepsData, setStepsData] = useState(initialState)
  const [currentStep, setCurrentStep] = useState(0)

  const saveStepData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value

    return setStepsData({
      ...stepsData,
      [name]: value,
    })
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(stepsData)
        }}
      >
        {currentStep === 0 && <Step1 data={stepsData.step1} setStepsData={saveStepData} />}
        {currentStep === 1 && <Step2 data={stepsData.step2} setStepsData={saveStepData} />}
        {currentStep === 2 && <Step3 data={stepsData.step3} setStepsData={saveStepData} />}
      </form>
      <button onClick={() => setCurrentStep((currentStep + 1) % 3)}>
        Current Step: {currentStep + 1}
      </button>
    </div>
  )
}

interface Steps {
  data: string
  setStepsData: (arg: ChangeEvent<HTMLInputElement>) => void
}

const Step1 = ({ data, setStepsData }: Steps) => {
  return (
    <div>
      <p>Step number 1</p>
      <input type="text" name="step1" value={data} onChange={setStepsData} />
    </div>
  )
}
const Step2 = ({ data, setStepsData }: Steps) => {
  return (
    <div>
      <p>Step number 2</p>
      <input type="text" name="step2" value={data} onChange={setStepsData} />
    </div>
  )
}
const Step3 = ({ data, setStepsData }: Steps) => {
  return (
    <div>
      <p>Step number 3</p>
      <input type="text" name="step3" value={data} onChange={setStepsData} />
      <button type="submit">Submit</button>
    </div>
  )
}
export default MultiStepForm
