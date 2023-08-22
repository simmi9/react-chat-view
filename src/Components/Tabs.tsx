



const Tabs = () => {
    return (
      <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
          <li>Priority</li>
          <li>Archieved</li>
        </ul>
        <div className="outlet">{/* content will be shown here */}</div>
      </div>
    );
  };

  export default Tabs;