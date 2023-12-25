
function BlockList(props) {
    return (
        <div className="block-list">
            {
                props.items.map((item, idx) => 
                <div 
                key={`block_${idx}`}
                className="block-list-item">
                    
                    <i className={item.icon}></i>
                    <p>
                        {item.value}
                    </p>
                    
                </div>)
            }
        </div>
    )
}

export { BlockList };