import { Window } from './';
import './styles/Controller.css'

const Controller = ({
    life1Count,
    life2Count,
    life3Count,
    life4Count,
    l1tol1,
    l1tol2,
    l1tol3,
    l1tol4,
    l2tol1,
    l2tol2,
    l2tol3,
    l2tol4,
    l3tol1,
    l3tol2,
    l3tol3,
    l3tol4,
    l4tol1,
    l4tol2,
    l4tol3,
    l4tol4,
    setLife1Count,
    setLife2Count,
    setLife3Count,
    setLife4Count,
    setL1tol1,
    setL1tol2,
    setL1tol3,
    setL1tol4,
    setL2tol1,
    setL2tol2,
    setL2tol3,
    setL2tol4,
    setL3tol1,
    setL3tol2,
    setL3tol3,
    setL3tol4,
    setL4tol1,
    setL4tol2,
    setL4tol3,
    setL4tol4,
}) => {

    const onChange = (e, set) => {
        set(e.target.value);
    }

    return (
        <div className="controller">
            <Window title="Controller" maxWidth={500}>
                <div className="flex">
                <div className="controllers">
                <div className="form-group">
                    <label>
                        Life 1 Count: <strong>{life1Count}</strong>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="3000"
                        value={life1Count}
                        onChange={(e) => onChange(e, setLife1Count)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 2 Count: <strong>{life2Count}</strong>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="3000"
                        value={life2Count}
                        onChange={(e) => onChange(e, setLife2Count)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 3 Count: <strong>{life3Count}</strong>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="3000"
                        value={life3Count}
                        onChange={(e) => onChange(e, setLife3Count)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 4 Count: <strong>{life4Count}</strong>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="3000"
                        value={life4Count}
                        onChange={(e) => onChange(e, setLife4Count)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 1 to Life 1: <strong>{l1tol1}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l1tol1}
                        onChange={(e) => onChange(e, setL1tol1)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 1 to Life 2: <strong>{l1tol2}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l1tol2}
                        onChange={(e) => onChange(e, setL1tol2)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 1 to Life 3: <strong>{l1tol3}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l1tol3}
                        onChange={(e) => onChange(e, setL1tol3)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 1 to Life 4: <strong>{l1tol4}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l1tol4}
                        onChange={(e) => onChange(e, setL1tol4)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 2 to Life 1: <strong>{l2tol1}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l2tol1}
                        onChange={(e) => onChange(e, setL2tol1)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 2 to Life 2: <strong>{l2tol2}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l2tol2}
                        onChange={(e) => onChange(e, setL2tol2)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 2 to Life 3: <strong>{l2tol3}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l2tol3}
                        onChange={(e) => onChange(e, setL2tol3)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 2 to Life 4: <strong>{l2tol4}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l2tol4}
                        onChange={(e) => onChange(e, setL2tol4)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 3 to Life 1: <strong>{l3tol1}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l3tol1}
                        onChange={(e) => onChange(e, setL3tol1)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 3 to Life 2: <strong>{l3tol2}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l3tol2}
                        onChange={(e) => onChange(e, setL3tol2)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 3 to Life 3: <strong>{l3tol3}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l3tol3}
                        onChange={(e) => onChange(e, setL3tol3)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 3 to Life 4: <strong>{l3tol4}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l3tol4}
                        onChange={(e) => onChange(e, setL3tol4)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 4 to Life 1: <strong>{l4tol1}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l4tol1}
                        onChange={(e) => onChange(e, setL4tol1)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 4 to Life 2: <strong>{l4tol2}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l4tol2}
                        onChange={(e) => onChange(e, setL4tol2)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 4 to Life 3: <strong>{l4tol3}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l4tol3}
                        onChange={(e) => onChange(e, setL4tol3)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Life 4 to Life 4: <strong>{l4tol4}</strong>
                    </label>
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={l4tol4}
                        onChange={(e) => onChange(e, setL4tol4)}
                    />
                </div>
                </div>
                </div>
            </Window>
        </div>
    )
}

export default Controller