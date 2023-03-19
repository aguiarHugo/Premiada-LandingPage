import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles/styles"
import{ SectionWrapper } from '../hoc'
import { steps } from '../constants'
import { textVariant } from "../utils/motion"

const StepCard = ({ step }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000",
        color: "#fff",
      }}
      lineColor={'#000'}
      contentArrowStyle={{ borderRight: "7px solid  #000" }}
      date={step.date}
      iconStyle={{ background: step.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={step.icon}
            alt="Premiada"
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-golden text-[24px] font-bold'>{step.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {step.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {step.points.map((point, index) => (
          <li
            key={`step-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Production = () => {
  return (
    <>
      <p className={`${styles.sectionSubText}`}>a cachaça em</p>
      <h2 className={`${styles.sectionHeadText}`}>8 Passos</h2>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {steps.map((step, index) => (
            <StepCard
              key={`step-${index}`}
              step={step}
            />
          ))}
        </VerticalTimeline>
      </div>
    
    </>
  )
}

export default SectionWrapper (Production, 'production')