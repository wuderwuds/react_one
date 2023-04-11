const Main = ({setCount}) => {
    const plusOne = () => {
        setCount((prev) => prev +1)
      }
      const minusOne = () => {
        setCount((prev) => prev -1)
      }
    return (
        <>
        <button onClick={plusOne}>PlusOne</button> <br/>
        <button onClick={minusOne}>MinusOne</button>
        
        <main>Main</main>
        </>
    )
}

export default Main