import React, {useState, useMemo, useCallback} from 'react';
// useCallback역시 useMemo처럼 렌더링 성능 최적화에 사용된다.
// useCallback의 기능은 이벤트 핸들러 함수를 필요할 때만 생성하는 것.
// ->컴포넌트의 렌더링이 자주 발생하거나, 렌더링해야할 컴포넌트의 개수가 많을 때 유용함
// (useCallback없이 함수를 선언하면 컴포넌트가 렌더링될 때마다 함수들이 새로 생성된다)

const getAverage = numbers => {
    console.log('평균값 계산중...')
    if(numbers.length === 0 ) return 0
    const sum = numbers.reduce((a,b)=>a+b)
    return sum / numbers.length
}

const Average = () =>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e =>{
        setNumber(e.target.value)
    }, [])
    // 여기서 두 번째 인자로 빈 배열을 전달한 것은 컴포넌트가 처음으로 렌더링되었을 때만 함수를 생성하기 위함임
    // 기존의 값을 조회할 일이 없기 때문에 이렇게 함

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list])
    // 두 번째 인자로 number와 list가 담긴 배열을 전달했으니 number, list가 바뀔 때만 함수 생성 
    // 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 이렇게 함

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


// 아래의 두 코드는 같은 코드임

// useCallback(()=>{
//     console.log('hello world');
// },[])

// 즉, useCallback은 useMemo에서 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 hook임
// => 숫자, 문자열, 객체 와 같은 일반 값을 재사용하기 위해서는 useMemo를,
// => 함수를 재사용하기 위해서는 useCallback을 사용하셈

// useMemo(()=>{
//     const fn = () => {
//         console.log('hello world');
//     };
//     return fn;
// },[])