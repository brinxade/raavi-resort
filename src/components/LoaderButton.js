
function LoaderButton(props) {
    return (
        <div className="flex">
            <button className={`mr-3 button button-secondary button-submit ${props.loading && 'button-loading'}`}>
                {props.text && <span>{props.text}</span>}
            </button>
            {props.status && <p className="button-status flex"><i class="fa-solid fa-check"></i> Message Sent</p>}
        </div>
    );
}

export {LoaderButton};