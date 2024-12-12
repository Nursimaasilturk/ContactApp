import './App.css';
import { ApiProvider } from './Context/Api';
import FormElement from './Components/FormElement';
import ContactList from './Components/ContactList';
import ContactInfo from './Components/ContactInfo';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-panel-bg bg-cover bg-no-repeat bg-center">
      <div className='w-10/12 h-[80vh] min-h-[700px] bg-[rgba(255,255,255,0.17)] rounded-[20px] border border-solid border-[rgba(255,255,255,0.27)] backdrop-blur-sm drop-shadow-md flex overflow-hidden p-8 items-start justify-between' >
          <ApiProvider>
            <div className='h-full w-[65%] flex flex-col justify-between'>
              <ContactInfo></ContactInfo>
              <ContactList></ContactList>
            </div>
            <FormElement>
            </FormElement>
          </ApiProvider>
      </div>
    </div>
  );
}

export default App;
