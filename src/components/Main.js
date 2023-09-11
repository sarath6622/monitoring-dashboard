import './Main.css';
import './GlobalVariable.css';
import Card from './Card';
import SectionHeader from './SectionHeader';
import { dataPMS } from './Data';

function Main() {


  return (
    <div className='container'>
        <SectionHeader name="PMS" />
        <div className='main'>
                {dataPMS.map((item, index) => (
                <Card
                key={index}
                name={item.name}
                title={item.title}
                footer={item.footer}
                />
            ))}
        </div>


        <SectionHeader name="Stock+" />
        <div className='main'>
                {dataPMS.map((item, index) => (
                <Card
                key={index}
                name={item.name}
                title={item.title}
                footer={item.footer}
                />
            ))}
        </div>


        <SectionHeader name="DSP" />
        <div className='main'>
                {dataPMS.map((item, index) => (
                <Card
                key={index}
                name={item.name}
                title={item.title}
                footer={item.footer}
                />
            ))}
        </div>


        <SectionHeader name="MD" />
        <div className='main'>
                {dataPMS.map((item, index) => (
                <Card
                key={index}
                name={item.name}
                title={item.title}
                footer={item.footer}
                />
            ))}
        </div>


        <SectionHeader name="ADD" />
        <div className='main'>
                {dataPMS.map((item, index) => (
                <Card
                key={index}
                name={item.name}
                title={item.title}
                footer={item.footer}
                />
            ))}
        </div>

    </div>
  );
}

export default Main;
