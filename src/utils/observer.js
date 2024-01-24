// Import React
import { useEffect, useState } from 'react'

// Fonction pour observer les éléments et mettre à jour leur visibilité
export const useObserver = (elementRef, index) => {
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const currentRef = elementRef.current
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
                root: null,
                rootMargin: '0px',
                threshold: 0.3,
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
