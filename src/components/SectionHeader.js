import './SectionHeader.css';

function SectionHeader(props) {
  return (
    <div className="section-header">
        
        <h3>{props.name}</h3>

    </div>
  );
}

export default SectionHeader;
