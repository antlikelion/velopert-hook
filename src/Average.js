import React, {useState, useMemo} from 'react';

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

    const avg = useMemo(()=>getAverage(list), [list])
    // list의 내용이 바뀔 때에만 getAverage함수를 호출함
    // useEffect가 컴포넌트가 렌더링 자체에 초점을 맞춘 것이라면,
    // useMemo는 컴포넌트를 렌더링할 때의 연산에 초점을 맞춘 것 같다
    // 솔직히 무슨 차이인지 모르겠다.
    // useEffect써도 될 줄 알았는데 안 됨...

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값 : </b>{avg}
            </div>
        </div>
    )
}

export default Average;