import React, { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Step from "../../components/Step";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step !== 5) {
      setStep(step + 1);
    } else {
    }
  }

  function handlePrevious() {
    if (step !== 1) {
      setStep(step - 1);
    }
  }

  return (
    <DefaultLayout>
      <div className="rounded-[40px] bg-white p-10 w-[70vw] md:w-[45vw]">
        <div className="flex justify-between">
          <Step number={1} current={step} />
          <Step number={2} current={step} />
          <Step number={3} current={step} />
          <Step number={4} current={step} />
        </div>
        <div className="my-10">
          <h2 className="text-[20px] font-900">Your Information</h2>
          <p>First name</p>
          <input/>
        </div>
        <div className={`flex items-center ${step !== 1 ? 'justify-between' : 'justify-end'}`}>
          {step !== 1 && (
            <button
              className="text-neutral-400 text-[14px] hover:text-neutral-700"
              onClick={handlePrevious}
            >
              Back
            </button>
          )}
          <button
            className="text-[14px] bg-[#FFB1B1] px-5 py-2 rounded-full"
            onClick={handleNext}
          >
            Continue
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MultiStepForm;
