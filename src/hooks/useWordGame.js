import { useState, useEffect, useRef } from 'react'

const useWordGame = (gameTime = 10) => {


    const [text, setText] = useState("")
    const [timeRemain, setTimeRemain] = useState(gameTime)
    const [isRunning, setIsRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputboxFocus = useRef(null)


    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }


    // filter out spaces so it only counts words
    const calcWordCount = (text) => {
        const wordArr = text.trim().split(" ")
        const filteredWords = wordArr.filter(word => word !== "")
        return filteredWords.length 
    } 

    const startGame = () => {
        setIsRunning(true)
        setTimeRemain(gameTime)
        setText("")
        inputboxFocus.current.disabled = false
        inputboxFocus.current.focus()
    }

    const endGame = () => {
        setIsRunning(false)
        const numWords = calcWordCount(text)
        setWordCount(numWords)
    }

    useEffect(() => {
    if (isRunning && timeRemain > 0) {
        setTimeout(() => {
        setTimeRemain(time => time -1)
        }, 1000);
    } else if (timeRemain === 0) {
        endGame()
    }
    }, [timeRemain, isRunning])
    
    return {handleChange, text, isRunning, inputboxFocus, timeRemain, startGame, wordCount}
}

export default useWordGame