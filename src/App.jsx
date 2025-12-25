import Header from './components/Header';
import SectionHero from './components/SectionHero';
import SystemTelemetry from './components/SystemTelemetry.jsx';
import PmmCoreComponents from './components/PmmCoreComponents.jsx';
import SectionSubstrate from './components/SectionSubstrate.jsx';
import SectionRSM from './components/SectionRSM.jsx';
import RecursiveSelfModelCard from './components/RecursiveSelfModelCard.jsx';

function App() {
  
  return (
  <>
    <Header/>
    <SectionHero/>
    <PmmCoreComponents/>
    <SectionSubstrate />
    <SectionRSM/>
    <RecursiveSelfModelCard/>
  </>
  )

}

export default App

