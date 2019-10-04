import {useState, useEffect} from 'react'

export default function usePromise(promiseCreator, deps){
    const [resolved, setResolved] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async ()=>{
        setLoading(true)
        try {
            const result = await promiseCreator();
            setResolved(result)
        } catch (e) {
            setError(e)
        }
        setLoading(false)
    }

    useEffect(()=>{
        process()
    }, deps)
    // deps는 언제 프로미스를 새로 만들지에 대한 조건을 담은 배열
    // (기본값은 빈 배열임)<-??? 
    // + 참고로 useEffect에 전달해주는 함수에서는 async 구문을 쓸 수 없다
    // 왜냐하면 useEffect가 반환할 수 있는 건 뒷정리 함수인데, async구문을 쓰게 되면 프로미스를 반환하기 때문

    return [loading, resolved, error]
}