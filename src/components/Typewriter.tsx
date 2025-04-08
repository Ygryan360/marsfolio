"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export default function Typewriter({
    words,
    typingSpeed = 75,
    deletingSpeed = 50,
    pauseDuration = 1000,
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && currentText.length < currentWord.length) {
            // Ajoute une lettre
            timeout = setTimeout(() => {
                setCurrentText(currentWord.slice(0, currentText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && currentText.length > 0) {
            // Supprime une lettre
            timeout = setTimeout(() => {
                setCurrentText(currentText.slice(0, -1));
            }, deletingSpeed);
        } else if (!isDeleting && currentText.length === currentWord.length) {
            // Pause avant de supprimer
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseDuration);
        } else if (isDeleting && currentText.length === 0) {
            // Passe au mot suivant
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return <span className="text-primary">{currentText}</span>;
}