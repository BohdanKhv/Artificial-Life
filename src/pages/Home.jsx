import { useState } from 'react';
import { Controller, Life } from '../components';

const Home = () => {
    const [life1Count, setLife1Count] = useState(300);
    const [life2Count, setLife2Count] = useState(300);
    const [life3Count, setLife3Count] = useState(300);
    const [life4Count, setLife4Count] = useState(50);
    // Relationships
    const [l1tol1, setL1tol1] = useState(-1);
    const [l1tol2, setL1tol2] = useState(1);
    const [l1tol3, setL1tol3] = useState(1);
    const [l1tol4, setL1tol4] = useState(0.1);
    const [l2tol1, setL2tol1] = useState(0.5);
    const [l2tol2, setL2tol2] = useState(-0.5);
    const [l2tol3, setL2tol3] = useState(0);
    const [l2tol4, setL2tol4] = useState(0.5);
    const [l3tol1, setL3tol1] = useState(0.2);
    const [l3tol2, setL3tol2] = useState(0.2);
    const [l3tol3, setL3tol3] = useState(0.9);
    const [l3tol4, setL3tol4] = useState(0);
    const [l4tol1, setL4tol1] = useState(0);
    const [l4tol2, setL4tol2] = useState(10);
    const [l4tol3, setL4tol3] = useState(5);
    const [l4tol4, setL4tol4] = useState(0);

    return (
        <div className="home grid-container mt-3">
            <Life
                life1Count={life1Count}
                life2Count={life2Count}
                life3Count={life3Count}
                life4Count={life4Count}
                l1tol1={l1tol1}
                l1tol2={l1tol2}
                l1tol3={l1tol3}
                l1tol4={l1tol4}
                l2tol1={l2tol1}
                l2tol2={l2tol2}
                l2tol3={l2tol3}
                l2tol4={l2tol4}
                l3tol1={l3tol1}
                l3tol2={l3tol2}
                l3tol3={l3tol3}
                l3tol4={l3tol4}
                l4tol1={l4tol1}
                l4tol2={l4tol2}
                l4tol3={l4tol3}
                l4tol4={l4tol4}
            />
            <Controller
                life1Count={life1Count}
                life2Count={life2Count}
                life3Count={life3Count}
                life4Count={life4Count}
                l1tol1={l1tol1}
                l1tol2={l1tol2}
                l1tol3={l1tol3}
                l1tol4={l1tol4}
                l2tol1={l2tol1}
                l2tol2={l2tol2}
                l2tol3={l2tol3}
                l2tol4={l2tol4}
                l3tol1={l3tol1}
                l3tol2={l3tol2}
                l3tol3={l3tol3}
                l3tol4={l3tol4}
                l4tol1={l4tol1}
                l4tol2={l4tol2}
                l4tol3={l4tol3}
                l4tol4={l4tol4}
                setLife1Count={setLife1Count}
                setLife2Count={setLife2Count}
                setLife3Count={setLife3Count}
                setLife4Count={setLife4Count}
                setL1tol1={setL1tol1}
                setL1tol2={setL1tol2}
                setL1tol3={setL1tol3}
                setL1tol4={setL1tol4}
                setL2tol1={setL2tol1}
                setL2tol2={setL2tol2}
                setL2tol3={setL2tol3}
                setL2tol4={setL2tol4}
                setL3tol1={setL3tol1}
                setL3tol2={setL3tol2}
                setL3tol3={setL3tol3}
                setL3tol4={setL3tol4}
                setL4tol1={setL4tol1}
                setL4tol2={setL4tol2}
                setL4tol3={setL4tol3}
                setL4tol4={setL4tol4}
            />
        </div>
    )
}

export default Home