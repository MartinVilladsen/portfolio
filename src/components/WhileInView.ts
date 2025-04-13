export const fadeInAnimationVariants = {
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    },
    initial: {
        opacity: 1,
        y: 100
    },
    animate:(index: number) => (
        {
            opcaity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        }
    ) 
}