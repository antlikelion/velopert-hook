import React, {useState} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...')
    if(numbers.length === 0 ) return 0
    const sum = numbers.reduce((a,b)=>a+b)
    return sum / numbers.length
}

const Average = () =>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    
    const onChange = e =>{
        setNumber(e.target.value)
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }
    return (
        <div>
            <input value={number} onChange={onChange} />
            {/* 이 상태로는 onChange이벤트가 발생할 때마다 컴포넌트가 재렌더링되어 getAverage함수가 쓸데없이
            많이 호출된다. */}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값 : </b>{getAverage(list)}
            </div>
        </div>
    )
}

export default Average;