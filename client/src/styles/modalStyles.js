import styles from '../styles/_variables.scss'

export  const modalStyles = {
    overlay: {
        position: "fixed",
        left:'50%',
        top:'50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        width: '90%',
        height: "90%",
        background: `linear-gradient(170deg, ${styles.pink}, ${styles.white}, ${styles.pink})`,
    },
    content: {
        background: `linear-gradient(170deg, ${styles.pink}, ${styles.white}, ${styles.pink})`,
        border:'none',
        display:'flex',
        flexDirection: 'column',
        alignItems:'flex-end'
        


    }
}