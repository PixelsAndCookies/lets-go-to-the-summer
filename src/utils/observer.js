import { useEffect, useState } from 'react'

// Fonction pour observer les éléments et mettre à jour leur visibilité
export const useObserver = (elementRef, index) => {
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        // Stocke la valeur actuelle de la référence à l'élément
        const currentRef = elementRef.current

        // Crée un nouvel objet IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Vérifie si l'élément est en cours d'intersection avec la zone d'observation
                    if (entry.isIntersecting && !isVisible) {
                        // Si oui, met à jour l'état local pour indiquer que l'élément est maintenant visible
                        setVisible(true)
                    }
                })
            },
            {
                root: null, // Utiliser l'ensemble du viewport comme racine
                rootMargin: '0px', // Aucune marge autour de la racine
                threshold: 0.5, // 50 % de l'élément doit être visible
            }
        )
        // Si la référence est définie, observe l'élément
        if (currentRef) {
            observer.observe(currentRef)
        }
        // Nettoyage : cesse d'observer l'élément lorsque le composant est démonté ou lorsque la référence change
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [elementRef, index, isVisible]) // Réexécute la fonction si les références ou l'état de visibilité changent

    // Retourne l'état de visibilité actuel de l'élément
    return isVisible
}
